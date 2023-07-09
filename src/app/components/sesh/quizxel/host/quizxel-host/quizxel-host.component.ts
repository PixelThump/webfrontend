import {Component} from '@angular/core';
import {SheshServiceService} from "../../../../../service/shesh-service.service";
import {ActivatedRoute} from "@angular/router";
import {QuizxelStateMessage} from "../../model/message/QuizxelStateMessage";
import {SeshStage} from "../../../model/SeshStage";
import {LobbyState} from "../../model/LobbyState";
import {QuizxelMainState} from "../../model/QuizxelMainState";


@Component({
  selector: 'app-quizxel-host',
  templateUrl: './quizxel-host.component.html',
  styleUrls: ['./quizxel-host.component.css']
})
export class QuizxelHostComponent {

  initializing = true
  currentStage: SeshStage = SeshStage.LOBBY;
  fullScreenMode = false;
  lobbyState = <LobbyState>{};
  mainState = <QuizxelMainState>{};


  constructor(private seshService: SheshServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        const seshCode = <string>params.get("seshCode")

        this.seshService.joinSeshAsHost(seshCode).subscribe(iMessage => {

          const message = JSON.parse(iMessage.body)
          if ('state' in message) {

            this.handleStateMessage(<QuizxelStateMessage>message)
          }
          this.initializing = false
        })
      }
    )
  }

  private handleStateMessage(message: QuizxelStateMessage) {

    const state = message.state;
    this.extractState(state)
    this.currentStage = state.currentStage;
  }

  private extractState(state: LobbyState) {

    if (this.lobbyState !== state) {

      this.currentStage = state.currentStage;
      this.lobbyState = state;
    }
  }

  goFullScreen(screen: HTMLDivElement) {

    screen.requestFullscreen().then(() => this.fullScreenMode = true).catch();
  }

  exitFullScreen() {

    document.exitFullscreen().then(() => this.fullScreenMode = false).catch()
  }
}
