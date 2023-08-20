import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {QuizxelAction} from "../../model/QuizxelAction";
import {QuizxelControllerState} from "../../../model/state/controller/QuizxelControllerState";
import {QuizxelControllerMainPlayerState} from "../../../model/state/controller/QuizxelControllerMainPlayerState";
import {QuizxelControllerMainVipState} from "../../../model/state/controller/QuizxelControllerMainVipState";

@Component({
  selector: 'app-quizxel-controller-main-player',
  templateUrl: './quizxel-controller-main-player.component.html',
  styleUrls: ['./quizxel-controller-main-player.component.css']
})
export class QuizxelControllerMainPlayerComponent implements OnInit, OnChanges {

  @Input() inputState = <QuizxelControllerState>{}
  state = <QuizxelControllerMainPlayerState>{}
  @Output() seshAction = new EventEmitter<QuizxelAction>()

  ngOnInit(): void {
    this.state = <QuizxelControllerMainPlayerState>this.inputState;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
    let prevState = changes["inputState"].previousValue
    let currentState = <QuizxelControllerMainVipState>changes["inputState"].currentValue

    if (prevState != null) {

      if (prevState.buzzedPlayerName == null && currentState.buzzedPlayerName != null) {

        navigator.vibrate([250, 125, 250])
      }
    }
  }

  buzzer() {
    const action: QuizxelAction = {type: "buzzer", body: this.state.playerName}
    this.seshAction.emit(action)
  }


}
