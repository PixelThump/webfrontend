import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {QuizxelAction} from "./model/QuizxelAction";
import {QuizxelPlayer} from "../model/QuizxelPlayer";
import {MessagingService} from "../../../service/messagingservice/messaging.service";
import {MessagingCommand} from "../../../service/messagingservice/model/MessagingCommand";
import {MessagingStateStompMessage} from "../../../service/messagingservice/model/message/MessagingStateStompMessage";
import {MessagingErrorStompMessage} from "../../../service/messagingservice/model/message/MessagingErrorStompMessage";
import {QuizxelStage} from "../model/QuizxelStage";
import {QuizxelState} from "../model/state/QuizxelState";


@Component({
  selector: 'app-quizxel-controller',
  templateUrl: './quizxel-controller.component.html',
  styleUrls: ['./quizxel-controller.component.css']
})
export class QuizxelControllerComponent {

  seshCode = ""
  currentStage: QuizxelStage = QuizxelStage.LOBBY;
  playerName = ""
  playerId = ""
  private subscription: Subscription = new Subscription();
  isVIP = false;
  needToAskForVip = true;
  state = <QuizxelState>{};

  constructor(private messagingService: MessagingService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        this.seshCode = <string>params.get("seshCode")
        this.playerName = <string>params.get("playerName")

        this.subscription = this.messagingService.joinSeshAsController(this.seshCode, this.playerName).subscribe(iMessage => {

          const message = JSON.parse(iMessage.body)
          console.log(message)

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
    console.log(message.state)
    this.extractState(<QuizxelState>message.state)
  }

  private extractState(state: QuizxelState) {

    if (state.currentStage.toString() === QuizxelStage[QuizxelStage.LOBBY]) {


      state.players.forEach(this.checkIfVipExists());
     state.players.filter((player) => player.playerName === this.playerName)
        .forEach((player) => {

          this.playerId = player.playerId;
          this.isVIP = player.vip;
        });
    }
    this.state = state;
    this.currentStage = state.currentStage;
  }

  private checkIfVipExists() {
    return (player: QuizxelPlayer) => {
      if (player.vip) this.needToAskForVip = false;
    };
  }

  makeVIP(action: QuizxelAction) {

    if (action.body !== undefined) {

      const makeVIPCommand: MessagingCommand = {playerId: this.playerId, body: action.body, type:action.type}
      this.messagingService.sendCommand(makeVIPCommand, this.seshCode)
    }

    this.needToAskForVip = false
  }

  private async handleErrorMessage(message: MessagingErrorStompMessage) {

    this.subscription.unsubscribe()
    console.log(message)
    this.router.navigateByUrl("/home")
  }

  handleAction(action: QuizxelAction) {
    const command: MessagingCommand = {playerId: this.playerId, body: action.body, type:action.type}
    this.messagingService.sendCommand(command, this.seshCode)
  }
}
