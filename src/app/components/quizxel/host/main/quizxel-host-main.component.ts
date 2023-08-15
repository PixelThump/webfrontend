import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {QuizxelPlayer} from "../../model/QuizxelPlayer";
import {QuizxelQuestion} from "../../model/question/QuizxelQuestion";
import {QuizxelState} from "../../model/state/QuizxelState";
import {QuizxelHostMainState} from "../../model/state/host/QuizxelHostMainState";

@Component({
  selector: 'app-quizxel-host-main',
  templateUrl: './quizxel-host-main.component.html',
  styleUrls: ['./quizxel-host-main.component.css']
})
export class QuizxelHostMainComponent implements OnInit, OnChanges {

  @Input() state = <QuizxelHostMainState>{}
  currentQuestion = <QuizxelQuestion<any>>{}
  showQuestion = false
  buzzeredPlayer = <QuizxelPlayer>{}
  controllerPlayers: QuizxelPlayer[] = [];
  leftControllerPlayers: QuizxelPlayer[] = []
  rightControllerPlayers: QuizxelPlayer[] = []

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const previousState = changes["state"].previousValue;
    const currentState = <QuizxelState>changes["state"].currentValue;
    this.setUpState(currentState);
    if (previousState !== undefined) this.checkBuzzer(previousState, currentState);
  }

  ngOnInit(): void {
    console.log(this.state)
    this.setUpState(this.state);
  }

  private setUpState(currentState: QuizxelHostMainState) {
    this.showQuestion = currentState.showQuestion;
    this.controllerPlayers = [];
    this.extractPlayers(currentState);
  }

  private checkBuzzer(previousState: QuizxelState, currentState: QuizxelState) {
    if ((previousState.buzzedPlayerId == null) && (currentState.buzzedPlayerId != null)) {
      this.playBuzzer();
    }
  }

  private extractPlayers(currentState: QuizxelHostMainState) {
    this.state.players.forEach(player => {
      if (player.playerId === currentState.buzzedPlayerId) {
        this.buzzeredPlayer = player
      }
      if (!player.vip) {
        this.controllerPlayers.push(player);
      }
    })
    let leftControllerPlayersLastIndex = Math.ceil(this.controllerPlayers.length / 2);
    this.leftControllerPlayers = this.controllerPlayers.slice(0, leftControllerPlayersLastIndex)
    this.rightControllerPlayers = this.controllerPlayers.slice(leftControllerPlayersLastIndex)
  }

  private playBuzzer() {
    const buzzerSound = new Audio("/assets/mixkit-correct-answer-fast-notification-953.wav")
    buzzerSound.load()
    buzzerSound.play()
  }


}
