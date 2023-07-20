import {Component} from '@angular/core';
import {SheshServiceService} from "../../../../../service/shesh-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuizxelStateMessage} from "../../model/message/QuizxelStateMessage";
import {SeshStage} from "../../../model/SeshStage";
import {LobbyState} from "../../../model/LobbyState";
import {QuizxelMainState} from "../../model/QuizxelMainState";
import {QuizxelErrorMessage} from "../../model/message/QuizxelErrorMessage";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-quizxel-host',
  templateUrl: './quizxel-host.component.html',
  styleUrls: ['./quizxel-host.component.css']
})
export class QuizxelHostComponent {

  currentStage: SeshStage = SeshStage.LOBBY;
  fullScreenMode = false;
  lobbyState = <LobbyState>{};
  mainState = <QuizxelMainState>{};
  private subscription: Subscription = <Subscription>{};


  constructor(private seshService: SheshServiceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        const seshCode = <string>params.get("seshCode")

        this.subscription = this.seshService.joinSeshAsHost(seshCode).subscribe(iMessage => {

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

  private handleErrorMessage(message: QuizxelErrorMessage) {

    this.subscription.unsubscribe()
    console.error(message)
    this.router.navigateByUrl("/home")
  }

  private extractState(state: LobbyState| QuizxelMainState){

    this.currentStage = state.currentStage;

    if (state.currentStage.toString() === SeshStage[SeshStage.LOBBY]) {

      this.lobbyState = <LobbyState>state;

    } else if (state.currentStage.toString() === SeshStage[SeshStage.MAIN]) {

      this.mainState = <QuizxelMainState>state
    }
  }

  goFullScreen(screen: HTMLDivElement) {

    screen.requestFullscreen().then(() => this.fullScreenMode = true).catch();
  }

  exitFullScreen() {

    document.exitFullscreen().then(() => this.fullScreenMode = false).catch()
  }
}
