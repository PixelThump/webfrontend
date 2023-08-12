import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MessagingService} from "../../../service/messagingservice/messaging.service";
import {MessagingStateStompMessage} from "../../../service/messagingservice/model/message/MessagingStateStompMessage";
import {MessagingErrorStompMessage} from "../../../service/messagingservice/model/message/MessagingErrorStompMessage";
import {QuizxelStage} from "../model/QuizxelStage";
import {QuizxelState} from "../model/state/QuizxelState";
import {IMessage} from "@stomp/rx-stomp";


@Component({
  selector: 'app-quizxel-host',
  templateUrl: './quizxel-host.component.html',
  styleUrls: ['./quizxel-host.component.css']
})
export class QuizxelHostComponent {

  currentStage: QuizxelStage = QuizxelStage.LOBBY;
  fullScreenMode = false;
  state = <QuizxelState>{}
  private subscription: Subscription = <Subscription>{};


  constructor(private messagingService: MessagingService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        const seshCode = <string>params.get("seshCode")
        this.subscription = this.messagingService.joinSeshAsHost(seshCode).subscribe(this.handleMessage())
      }
    )
  }

  private handleMessage() {
    return (iMessage: IMessage) => {
      const message = JSON.parse(iMessage.body)
      if ('state' in message) {
        this.handleStateMessage(<MessagingStateStompMessage>message)
      } else if ("error" in message) {
        this.handleErrorMessage(<MessagingErrorStompMessage>message)
      }
    };
  }

  private handleStateMessage(message: MessagingStateStompMessage) {
    this.state = <QuizxelState>message.state;
    this.currentStage = this.state.currentStage;
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
}
