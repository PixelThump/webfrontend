import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizxelStateMessage} from "../model/message/QuizxelStateMessage";
import {SeshStage} from "../model/SeshStage";
import {SeshCommand} from "../model/SeshCommand";
import {QuizxelErrorMessage} from "../model/message/QuizxelErrorMessage";
import {Subscription} from "rxjs";
import {SeshAction} from "../model/action/SeshAction";
import {LobbyState} from "../model/state/LobbyState";
import {QuizxelMainState} from "../model/QuizxelMainState";
import {QuizxelPlayer} from "../model/QuizxelPlayer";
import {MessagingService} from "../../../service/messagingservice/messaging.service";


@Component({
  selector: 'app-quizxel-controller',
  templateUrl: './quizxel-controller.component.html',
  styleUrls: ['./quizxel-controller.component.css']
})
export class QuizxelControllerComponent {

  seshCode = ""
  currentStage: SeshStage = SeshStage.LOBBY;
  playerName = ""
  playerId = ""
  private subscription: Subscription = new Subscription();
  isVIP = false;
  needToAskForVip = true;
  lobbyState = <LobbyState>{};
  mainState = <QuizxelMainState>{};

  constructor(private messagingService: MessagingService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        this.seshCode = <string>params.get("seshCode")
        this.playerName = <string>params.get("playerName")

        this.subscription = this.messagingService.joinSeshAsController(this.seshCode, this.playerName).subscribe(iMessage => {

          const message = JSON.parse(iMessage.body)

          if ('state' in message) {

            this.handleStateMessage(<QuizxelStateMessage>message)

          } else if ("error" in message) {

            this.handleErrorMessage(<QuizxelErrorMessage>message)
          }
        })
      }
    )
  }

  private handleStateMessage(message: QuizxelStateMessage) {

    let state = message.state;
    this.extractState(state)
  }

  private extractState(state: LobbyState | QuizxelMainState) {

    if (state.currentStage.toString() === SeshStage[SeshStage.LOBBY]) {

      this.lobbyState = <LobbyState>state;
      this.lobbyState.players.forEach(this.checkIfVipExists());
      this.lobbyState.players.filter((player) => player.playerName === this.playerName)
        .forEach((player) => {

          this.playerId = player.playerId;
          this.isVIP = player.vip;
        });

    } else if (state.currentStage.toString() === SeshStage[SeshStage.MAIN]) {

      this.mainState = <QuizxelMainState>state;
    }

    this.currentStage = state.currentStage;
  }

  private checkIfVipExists() {
    return (player: QuizxelPlayer) => {
      if (player.vip) this.needToAskForVip = false;
    };
  }

  makeVIP(action: SeshAction) {

    if (action.body !== undefined) {

      const makeVIPCommand: SeshCommand = {playerId: this.playerId, body: action.body, type:action.type}
      this.messagingService.sendCommand(makeVIPCommand, this.seshCode)
    }

    this.needToAskForVip = false
  }

  private async handleErrorMessage(message: QuizxelErrorMessage) {

    this.subscription.unsubscribe()
    console.log(message)
    this.router.navigateByUrl("/home")
  }

  handleAction(action: SeshAction) {
    console.log(action)
    const command: SeshCommand = {playerId: this.playerId, body: action.body, type:action.type}
    this.messagingService.sendCommand(command, this.seshCode)
  }
}
