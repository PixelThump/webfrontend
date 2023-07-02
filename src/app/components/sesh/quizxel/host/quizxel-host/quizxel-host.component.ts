import {Component} from '@angular/core';
import {SheshServiceService} from "../../../../../service/shesh-service.service";
import {ActivatedRoute} from "@angular/router";
import {QuizxelStateMessage} from "../../model/message/QuizxelStateMessage";
import {QuizxelPlayer} from "../../model/QuizxelPlayer";
import {SeshStage} from "../../../model/SeshStage";

@Component({
  selector: 'app-quizxel-host',
  templateUrl: './quizxel-host.component.html',
  styleUrls: ['./quizxel-host.component.css']
})
export class QuizxelHostComponent {

  seshCode = ""
  initializing = true
  players: QuizxelPlayer[] = []
  maxPlayers: number = 5;
  currentStage: SeshStage = SeshStage.LOBBY;

  constructor(private seshService: SheshServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        this.seshCode = <string>params.get("seshCode")

        this.seshService.joinSeshAsHost(this.seshCode).subscribe(iMessage => {


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
    this.players = state.players;
    this.maxPlayers = state.maxPlayers;
    this.currentStage = state.currentStage;
  }
}
