import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {QuizxelAction} from "./model/QuizxelAction";
import {MessagingService} from "../../../service/messagingservice/messaging.service";
import {MessagingCommand} from "../../../service/messagingservice/model/MessagingCommand";
import {MessagingStateStompMessage} from "../../../service/messagingservice/model/message/MessagingStateStompMessage";
import {MessagingErrorStompMessage} from "../../../service/messagingservice/model/message/MessagingErrorStompMessage";
import {QuizxelStage} from "../model/QuizxelStage";
import {QuizxelState} from "../model/state/QuizxelState";
import {QuizxelControllerLobbyState} from "../model/state/controller/QuizxelControllerLobbyState";
import {QuizxelControllerVipMainState} from "../model/state/controller/QuizxelControllerVipMainState";
import {QuizxelControllerPlayerMainState} from "../model/state/controller/QuizxelControllerPlayerMainState";
import {QuizxelPlayer} from "../model/QuizxelPlayer";


@Component({
  selector: 'app-quizxel-controller',
  templateUrl: './quizxel-controller.component.html',
  styleUrls: ['./quizxel-controller.component.css']
})
export class QuizxelControllerComponent {

  lobbyState = <QuizxelControllerLobbyState>{}
  vipMainState = <QuizxelControllerVipMainState>{}
  playerMainState = <QuizxelControllerPlayerMainState>{}
  private subscription: Subscription = new Subscription();
  isVIP = false;
  needToAskForVip = true;
  currentStage: QuizxelStage = QuizxelStage.LOBBY;
  seshCode = ""
  playerName = ""
  playerId = ""

  constructor(private messagingService: MessagingService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        this.seshCode = <string>params.get("seshCode")
        this.playerName = <string>params.get("playerName")
        this.subscription = this.messagingService.joinSeshAsController(this.seshCode, this.playerName).subscribe(iMessage => {
          const message = JSON.parse(iMessage.body)
          if ('state' in message) {
            this.handleStateMessage(<MessagingStateStompMessage>message)
          } else if ("error" in message) {
            this.handleErrorMessage(<MessagingErrorStompMessage>message)
          }
        })
      }
    )
  }

  private handleStateMessage(message: MessagingStateStompMessage) {

    let state = <QuizxelState>message.state;
    this.currentStage = state.currentStage;
    this.isVIP = this.isVip(state.players);
    if (state.currentStage.toString() === QuizxelStage[QuizxelStage.LOBBY]) {
      this.extractLobbyState(state);
    } else if (state.currentStage.toString() === QuizxelStage[QuizxelStage.MAIN]) {
      this.extractMainState(state)
    }
  }

  private isVip(players: QuizxelPlayer[]): boolean {

    return <boolean>players.find(player => player.playerName == this.playerName)?.vip
  }

  private extractLobbyState(state: QuizxelState) {

    this.lobbyState.seshCode = state.seshCode;
    if (this.needToAskForVip) {
      this.needToAskForVip = !state.hasVip;
    }
    this.lobbyState.needToAskForVip = this.needToAskForVip
    this.setPlayerIdAndIsVip(state);
  }

  private setPlayerIdAndIsVip(state: QuizxelState) {

    let player = <QuizxelPlayer>state.players.find((player) => player.playerName === this.playerName);
    this.lobbyState.playerId = player.playerId;
    this.lobbyState.isVip = player.vip;
  }

  private extractMainState(state: QuizxelState) {

    this.vipMainState = <QuizxelControllerVipMainState><unknown>state;
    this.playerMainState.playerId = this.playerId;
    this.playerMainState.currentStage = state.currentStage;
    this.playerMainState.buzzedPlayerId = state.buzzedPlayerId;
    this.playerMainState.seshCode = state.seshCode;
  }

  makeVIP(action: QuizxelAction) {

    if (action.body !== undefined) {
      const makeVIPCommand: MessagingCommand = {playerId: this.playerId, body: action.body, type: action.type}
      this.messagingService.sendCommand(makeVIPCommand, this.seshCode)
    }
    this.needToAskForVip = false
  }

  private handleErrorMessage(message: MessagingErrorStompMessage) {

    this.subscription.unsubscribe()
    console.error(message);
    this.router.navigateByUrl("/home")
  }

  handleAction(action: QuizxelAction) {

    const command: MessagingCommand = {playerId: this.playerId, body: action.body, type: action.type}
    this.messagingService.sendCommand(command, this.seshCode)
  }
}
