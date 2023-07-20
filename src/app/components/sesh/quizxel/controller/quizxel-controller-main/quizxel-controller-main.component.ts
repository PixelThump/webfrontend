import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuizxelMainState} from "../../model/QuizxelMainState";
import {SeshAction} from "../../../model/action/SeshAction";

@Component({
  selector: 'app-quizxel-controller-main',
  templateUrl: './quizxel-controller-main.component.html',
  styleUrls: ['./quizxel-controller-main.component.css']
})
export class QuizxelControllerMainComponent {

  @Input() playerId = "";
  @Input() state = <QuizxelMainState>{}
  @Output() seshAction = new EventEmitter<SeshAction>()

  buzzer() {

    const action: SeshAction = {type:"buzzer", body:this.playerId}
    this.seshAction.emit(action)
  }
}
