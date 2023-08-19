import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {QuizxelPlayer} from "../../model/QuizxelPlayer";
import {QuizxelHostMainState} from "../../model/state/host/QuizxelHostMainState";
import {QuizxelHostState} from "../../model/state/host/QuizxelHostState";

@Component({
  selector: 'app-quizxel-host-main',
  templateUrl: './quizxel-host-main.component.html',
  styleUrls: ['./quizxel-host-main.component.css']
})
export class QuizxelHostMainComponent implements OnInit, OnChanges {

  @Input() inputState = <QuizxelHostState>{}
  @Input() state = <QuizxelHostMainState>{}
  controllerPlayers: QuizxelPlayer[] = [];
  leftControllerPlayers: QuizxelPlayer[] = []
  rightControllerPlayers: QuizxelPlayer[] = []
  buzzeredPlayer: QuizxelPlayer | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    const currentState = <QuizxelHostMainState>changes["inputState"].currentValue;
    this.state = currentState
    if (changes["inputState"].previousValue) {
      console.log(changes)
      this.extractPlayers();
      const previousState = changes["inputState"].previousValue;
      this.checkBuzzer(previousState, currentState);
    }
  }

  ngOnInit(): void {
    this.state = <QuizxelHostMainState>this.inputState;
    if (this.state) this.extractPlayers();
  }

  private checkBuzzer(previousState: QuizxelHostMainState, currentState: QuizxelHostMainState) {
    if (currentState.buzzedPlayerName != null) {
      this.buzzeredPlayer = <QuizxelPlayer>currentState.players.find(player => player.playerId.playerName === currentState.buzzedPlayerName)
    }
    if ((previousState.buzzedPlayerName == null) && (currentState.buzzedPlayerName != null)) {
      this.playBuzzerSound();
    }
    if (currentState.buzzedPlayerName == null){

      this.buzzeredPlayer = undefined;
    }
  }

  private extractPlayers() {
    this.controllerPlayers = []
    for (const player of this.state.players) {
      if (!player.vip) {
        this.controllerPlayers.push(player);
      }
    }
    let leftControllerPlayersLastIndex = Math.ceil(this.controllerPlayers.length / 2);
    this.leftControllerPlayers = this.controllerPlayers.slice(0, leftControllerPlayersLastIndex)
    this.rightControllerPlayers = this.controllerPlayers.slice(leftControllerPlayersLastIndex)
  }

  private playBuzzerSound() {
    const buzzerSound = new Audio("/assets/mixkit-correct-answer-fast-notification-953.wav")
    buzzerSound.load()
    buzzerSound.play().catch(console.log)
  }
}
