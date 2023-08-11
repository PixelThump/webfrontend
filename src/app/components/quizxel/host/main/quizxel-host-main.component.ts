import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {QuizxelPlayer} from "../../model/QuizxelPlayer";
import {QuizxelQuestion} from "../../model/question/QuizxelQuestion";
import {QuizxelState} from "../../model/state/QuizxelState";

@Component({
  selector: 'app-quizxel-host-main',
  templateUrl: './quizxel-host-main.component.html',
  styleUrls: ['./quizxel-host-main.component.css']
})
export class QuizxelHostMainComponent implements OnChanges {

  @Input() state = <QuizxelState>{}
  currentQuestion = <QuizxelQuestion<any>>{}
  showQuestion = false
  players: QuizxelPlayer[] = []
  buzzedPlayerId = ""
  buzzeredPlayer?: QuizxelPlayer
  controllerPlayers: QuizxelPlayer[] = [];
  showAnswer = false;

  ngOnChanges(changes: SimpleChanges): void {

    const previousState = <QuizxelState>changes["state"].previousValue
    const currentState = <QuizxelState>changes["state"].currentValue

    this.currentQuestion = currentState.currentQuestion;
    this.showQuestion = currentState.showQuestion;
    this.showAnswer = currentState.showAnswer;
    this.players = currentState.players;
    this.buzzedPlayerId = currentState.buzzedPlayerId
    this.buzzeredPlayer = undefined;
    this.controllerPlayers = []
    this.players.forEach(player => {

      if (player.playerId === currentState.buzzedPlayerId) {

        this.buzzeredPlayer = player
      }

      if (!player.vip) {

        this.controllerPlayers.push(player);
      }
    })

    console.log(previousState)
    console.log(currentState.buzzedPlayerId)
    if ((previousState.buzzedPlayerId == null) && (currentState.buzzedPlayerId != null)) {

      this.playBuzzer()
    }
  }

  private async playBuzzer() {

    const buzzerSound = new Audio("/assets/mixkit-correct-answer-fast-notification-953.wav")
    buzzerSound.load()
    await buzzerSound.play()
  }
}
