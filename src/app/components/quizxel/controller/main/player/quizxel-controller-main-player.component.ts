import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {QuizxelAction} from "../../model/QuizxelAction";

@Component({
  selector: 'app-quizxel-controller-main-player',
  templateUrl: './quizxel-controller-main-player.component.html',
  styleUrls: ['./quizxel-controller-main-player.component.css']
})
export class QuizxelControllerMainPlayerComponent implements OnChanges {

  @Input() playerId = "";
  @Input() questionType = "";
  @Input() buzzedPlayerId = "";
  @Output() seshAction = new EventEmitter<QuizxelAction>()


  buzzer() {

    const action: QuizxelAction = {type: "buzzer", body: this.playerId}
    this.seshAction.emit(action)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
