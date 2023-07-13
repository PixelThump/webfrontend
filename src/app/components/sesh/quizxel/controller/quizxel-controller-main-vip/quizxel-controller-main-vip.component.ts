import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuizxelMainState} from "../../model/QuizxelMainState";
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
    const action: SeshAction = {type: "freeBuzzer", body: answerCorrect};
    this.seshAction.emit(action);
  }
}
