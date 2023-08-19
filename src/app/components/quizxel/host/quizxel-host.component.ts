import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MessagingService} from "../../../service/messagingservice/messaging.service";
import {MessagingStateStompMessage} from "../../../service/messagingservice/model/message/MessagingStateStompMessage";
import {MessagingErrorStompMessage} from "../../../service/messagingservice/model/message/MessagingErrorStompMessage";
import {IMessage} from "@stomp/rx-stomp";
import {
  MessagingGenericStompMessage
} from "../../../service/messagingservice/model/message/MessagingGenericStompMessage";
import {QuizxelHostState} from "../model/state/host/QuizxelHostState";


@Component({
  selector: 'app-quizxel-host',
  templateUrl: './quizxel-host.component.html',
  styleUrls: ['./quizxel-host.component.css']
})
export class QuizxelHostComponent implements OnDestroy, OnInit{

  @Input() seshCode = ""
  fullScreenMode = false;
  state = <QuizxelHostState>{}
  private subscription: Subscription = <Subscription>{};

  constructor(private messagingService: MessagingService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.subscription = this.messagingService.joinSeshAsHost(this.seshCode).subscribe(this.handleMessage())
      }
    )
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();
  }

  private handleMessage() {
    return (iMessage: IMessage) => {
      const message = JSON.parse(iMessage.body)
      console.log(message)
      if ('state' in message) {
        this.handleInitialStateMessage(<MessagingStateStompMessage>message)
      } else if ('payload' in message){
        this.handleStateMessage(<MessagingGenericStompMessage>message)
      }else if ("error" in message) {
        this.handleErrorMessage(<MessagingErrorStompMessage>message)
      }
    };
  }

  private handleStateMessage(message: MessagingGenericStompMessage) {
    this.state = <QuizxelHostState>message.payload;
  }

  private handleErrorMessage(message: MessagingErrorStompMessage) {
    this.subscription.unsubscribe()
    console.error(message)
    this.router.navigateByUrl("/home")
  }

  goFullScreen(screen: HTMLDivElement) {
    screen.requestFullscreen().then(() => this.fullScreenMode = true).catch();
  }

  exitFullScreen() {
    document.exitFullscreen().then(() => this.fullScreenMode = false).catch()
  }

  private handleInitialStateMessage(message: MessagingStateStompMessage) {
    this.handleStateMessage({payload: message.state})
  }
}
