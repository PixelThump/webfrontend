import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {QuizxelAction} from "./model/QuizxelAction";
import {MessagingService} from "../../../service/messagingservice/messaging.service";
import {MessagingCommand} from "../../../service/messagingservice/model/MessagingCommand";
import {MessagingStateStompMessage} from "../../../service/messagingservice/model/message/MessagingStateStompMessage";
import {MessagingErrorStompMessage} from "../../../service/messagingservice/model/message/MessagingErrorStompMessage";
import {
  MessagingGenericStompMessage
} from "../../../service/messagingservice/model/message/MessagingGenericStompMessage";
import {QuizxelControllerState} from "../model/state/controller/QuizxelControllerState";


@Component({
  selector: 'app-quizxel-controller',
  templateUrl: './quizxel-controller.component.html',
  styleUrls: ['./quizxel-controller.component.css']
})
export class QuizxelControllerComponent implements OnDestroy, OnInit {

  @Input() seshCode = ""
  @Input() playerName = ""
  private subscription: Subscription = new Subscription();
  state = <QuizxelControllerState>{}
  needToAskForVip = true;

  constructor(private messagingService: MessagingService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        this.subscription = this.messagingService.joinSeshAsController(this.seshCode, this.playerName).subscribe(iMessage => {
          const message = JSON.parse(iMessage.body)
          console.log(message)
          if ('state' in message) {
            this.handleInitialStateMessage(<MessagingStateStompMessage>message)
          } else if ("payload" in message) {
            this.handleStateMessage(<MessagingGenericStompMessage>message)
          } else if ("error" in message) {
            this.handleErrorMessage(<MessagingErrorStompMessage>message)
          }
        })
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private handleStateMessage(message: MessagingGenericStompMessage) {
    console.log("handling stateMessage")
    console.log(message.payload)
    this.state = <QuizxelControllerState>message.payload
  }

  private handleInitialStateMessage(message: MessagingStateStompMessage) {
    sessionStorage.setItem(message.state.seshCode, message.reconnectToken)
    this.handleStateMessage({"payload": message.state})
  }

  private handleErrorMessage(message: MessagingErrorStompMessage) {

    this.subscription.unsubscribe()
    console.error(message);
    this.router.navigateByUrl("/home")
  }

  handleAction(action: QuizxelAction) {

    const command: MessagingCommand = {playerName: this.playerName, body: action.body, type: action.type}
    this.messagingService.sendCommand(command, this.seshCode)
  }

  makeVIP(action: QuizxelAction) {

    if (action.body !== undefined) {
      const makeVIPCommand: MessagingCommand = {playerName: this.playerName, body: action.body, type: action.type}
      this.messagingService.sendCommand(makeVIPCommand, this.seshCode)
    }
    console.log(action)
    this.needToAskForVip = false
  }
}
