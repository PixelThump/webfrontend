import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuizxelMainState} from "../../../model/QuizxelMainState";
import {SeshAction} from "../../../model/action/SeshAction";

@Component({
  selector: 'app-quizxel-controller-main-vip',
  templateUrl: './quizxel-controller-main-vip.component.html',
  styleUrls: ['./quizxel-controller-main-vip.component.css']
})
export class QuizxelControllerMainVipComponent {

  @Input() playerId = "";
  @Input() state = <QuizxelMainState>{}
  @Output() seshAction: EventEmitter<SeshAction> = new EventEmitter();

  freeBuzzer(answerCorrect?: boolean) {

    console.log(answerCorrect)
    let body;

    if (answerCorrect === true){
      body = "correct";
    }else if (answerCorrect === false){
      body = "wrong"
    }else {
      body = null;
    }

    const action: SeshAction = {type: "freeBuzzer", body: body};
    this.seshAction.emit(action);
  }

  showQuestion(show: boolean) {

    const action: SeshAction = {type:"showQuestion", body: show};
    this.seshAction.emit(action);
  }

  nextQuestion() {

    const action: SeshAction = {type: "nextQuestion", body: "next"}
    this.seshAction.emit(action);
  }

  prevQuestion(){

    const action: SeshAction = {type: "nextQuestion", body: "prev"}
    this.seshAction.emit(action);
  }

  showAnswer(show: boolean) {

    const action: SeshAction = {type:"showAnswer", body: show};
    this.seshAction.emit(action);
  }
}
