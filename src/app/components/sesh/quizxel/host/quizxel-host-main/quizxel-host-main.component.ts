import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {QuizxelMainState} from "../../model/QuizxelMainState";
import {QuizxelPlayer} from "../../model/QuizxelPlayer";
import {QuizxelQuestion} from "../../model/question/QuizxelQuestion";

@Component({
  selector: 'app-quizxel-host-main',
  templateUrl: './quizxel-host-main.component.html',
  styleUrls: ['./quizxel-host-main.component.css']
})
export class QuizxelHostMainComponent implements OnChanges {

  @Input() state = <QuizxelMainState>{}
  currentQuestion: QuizxelQuestion = <QuizxelQuestion>{}
  showQuestion = false
  players: QuizxelPlayer[] = []
  buzzedPlayerId = ""
  buzzeredPlayer?: QuizxelPlayer
  controllerPlayers: QuizxelPlayer[] = [];
  showAnswer = false;

  ngOnChanges(changes: SimpleChanges): void {

    const previousState = <QuizxelMainState> changes["state"].previousValue
    const currentState = <QuizxelMainState> changes["state"].currentValue

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

      if (!player.vip){

        this.controllerPlayers.push(player);
      }
    })

    if (!previousState.buzzedPlayerId && currentState.buzzedPlayerId){

      this.playBuzzer()
    }
  }

  private playBuzzer() {

    const buzzerSound = new Audio("/assets/mixkit-correct-answer-fast-notification-953.wav")
    buzzerSound.load()
    buzzerSound.play()
  }
}
