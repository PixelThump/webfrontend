import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuizxelMainState} from "../../../model/QuizxelMainState";
import {SeshAction} from "../../../model/action/SeshAction";

@Component({
  selector: 'app-quizxel-controller-main-player',
  templateUrl: './quizxel-controller-main-player.component.html',
  styleUrls: ['./quizxel-controller-main-player.component.css']
})
export class QuizxelControllerMainPlayerComponent {

  @Input() playerId = "";
  @Input() state = <QuizxelMainState>{}
  @Output() seshAction = new EventEmitter<SeshAction>()

  buzzer() {

    const action: SeshAction = {type:"buzzer", body:this.playerId}
    this.seshAction.emit(action)
  }
}
