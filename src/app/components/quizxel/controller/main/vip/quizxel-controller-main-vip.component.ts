import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {QuizxelAction} from "../../model/QuizxelAction";
import {QuizxelControllerState} from "../../../model/state/controller/QuizxelControllerState";
import {QuizxelControllerMainVipState} from "../../../model/state/controller/QuizxelControllerMainVipState";

@Component({
  selector: 'app-quizxel-controller-main-vip',
  templateUrl: './quizxel-controller-main-vip.component.html',
  styleUrls: ['./quizxel-controller-main-vip.component.css']
})
export class QuizxelControllerMainVipComponent implements OnInit, OnChanges{

  @Input() inputState = <QuizxelControllerState>{}
  state = <QuizxelControllerMainVipState>{}
  @Output() seshAction: EventEmitter<QuizxelAction> = new EventEmitter();

  ngOnInit(): void {

    this.state = <QuizxelControllerMainVipState> this.inputState;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
    let prevState = changes["inputState"].previousValue
    let currentState = <QuizxelControllerMainVipState> changes["inputState"].currentValue

    if (prevState != null){

      if (prevState.buzzedPlayerName == null && currentState.buzzedPlayerName != null){

        navigator.vibrate([250,125,250])
      }
    }
  }

  freeBuzzer(answerCorrect?: boolean) {
    let body;
    if (answerCorrect === true) {
      body = "correct";
    } else if (answerCorrect === false) {
      body = "wrong"
    } else {
      body = null;
    }
    const action: QuizxelAction = {type: "freeBuzzer", body: body};
    this.seshAction.emit(action);
  }

  showQuestion(show: boolean) {
    const action: QuizxelAction = {type: "showQuestion", body: show};
    this.seshAction.emit(action);
  }

  nextQuestion() {
    const action: QuizxelAction = {type: "nextQuestion", body: "next"}
    this.seshAction.emit(action);
  }

  prevQuestion() {
    const action: QuizxelAction = {type: "nextQuestion", body: "prev"}
    this.seshAction.emit(action);
  }

  showAnswer(show: boolean) {
    const action: QuizxelAction = {type: "showAnswer", body: show};
    this.seshAction.emit(action);
  }
}
