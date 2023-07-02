import {Component} from '@angular/core';
import {SheshServiceService} from "../../../../../service/shesh-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuizxelStateMessage} from "../../model/message/QuizxelStateMessage";
import {QuizxelPlayer} from "../../model/QuizxelPlayer";
import {SeshStage} from "../../../model/SeshStage";
import {SeshCommand} from "../../../model/SeshCommand";
import {MakeVipAction} from "../../../model/action/MakeVipAction";
import {QuizxelErrorMessage} from "../../model/message/QuizxelErrorMessage";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-quizxel-controller',
  templateUrl: './quizxel-controller.component.html',
  styleUrls: ['./quizxel-controller.component.css']
})
export class QuizxelControllerComponent {

  seshCode = ""
  initializing = true
  players: QuizxelPlayer[] = []
  maxPlayers: number = 5;
  currentStage: SeshStage = SeshStage.LOBBY;
  playerName = ""
  playerId = ""
  private subscription: Subscription = new Subscription();

  constructor(private seshService: SheshServiceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        this.seshCode = <string>params.get("seshCode")
        this.playerName = <string>params.get("playerName")


        this.subscription = this.seshService.joinSeshAsController(this.seshCode, this.playerName).subscribe(iMessage => {


          const message = JSON.parse(iMessage.body)

          if ('state' in message) {

            this.handleStateMessage(<QuizxelStateMessage>message)

          } else if ("error" in message) {

            this.handleErrorMessage(<QuizxelErrorMessage>message)
          }
          this.initializing = false
        })
      }
    )
  }

  private handleStateMessage(message: QuizxelStateMessage) {

    const state = message.state;
    console.log(state)
    this.players = state.players;
    this.maxPlayers = state.maxPlayers;
    this.currentStage = state.currentStage;
    state.players.filter((player) => player.playername !== this.playerName).forEach((player) => this.playerId = player.playerId);
  }

  makeVIP(value: boolean) {


    const makeVipAction: MakeVipAction = {playerId: this.playerId, makeVip: value, type: "makeVip"}
    const makeVIPCommand: SeshCommand = {playerId: this.playerId, action: makeVipAction}
    this.seshService.sendCommand(makeVIPCommand, this.seshCode)
  }

  private handleErrorMessage(message: QuizxelErrorMessage) {

    this.subscription.unsubscribe()
    this.router.navigateByUrl("/home").catch()
  }
}
