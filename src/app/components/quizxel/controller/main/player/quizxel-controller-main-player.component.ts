import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {QuizxelAction} from "../../model/QuizxelAction";
import {QuizxelControllerState} from "../../../model/state/controller/QuizxelControllerState";
import {QuizxelControllerMainPlayerState} from "../../../model/state/controller/QuizxelControllerMainPlayerState";

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
    this.state = <QuizxelControllerMainPlayerState>this.inputState;
  }

  buzzer() {
    const action: QuizxelAction = {type: "buzzer", body: this.state.playerName}
    this.seshAction.emit(action)
  }


}
