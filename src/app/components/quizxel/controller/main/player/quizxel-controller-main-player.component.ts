import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuizxelAction} from "../../model/QuizxelAction";
import {QuizxelControllerPlayerMainState} from "../../../model/state/controller/QuizxelControllerPlayerMainState";

@Component({
  selector: 'app-quizxel-controller-main-player',
  templateUrl: './quizxel-controller-main-player.component.html',
  styleUrls: ['./quizxel-controller-main-player.component.css']
})
export class QuizxelControllerMainPlayerComponent{

  @Input() state = <QuizxelControllerPlayerMainState> {}
  @Output() seshAction = new EventEmitter<QuizxelAction>()


  buzzer() {

    const action: QuizxelAction = {type: "buzzer", body: this.state.playerId}
    this.seshAction.emit(action)
  }
}
