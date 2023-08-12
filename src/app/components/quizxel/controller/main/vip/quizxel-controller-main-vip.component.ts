import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuizxelAction} from "../../model/QuizxelAction";
import {QuizxelControllerVipMainState} from "../../../model/state/controller/QuizxelControllerVipMainState";

@Component({
  selector: 'app-quizxel-controller-main-vip',
  templateUrl: './quizxel-controller-main-vip.component.html',
  styleUrls: ['./quizxel-controller-main-vip.component.css']
})
export class QuizxelControllerMainVipComponent {

  @Input() playerId = "";
  @Input() state = <QuizxelControllerVipMainState>{}
  @Output() seshAction: EventEmitter<QuizxelAction> = new EventEmitter();

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
