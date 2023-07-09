import {Component, Input} from '@angular/core';
import {QuizxelMainState} from "../../model/QuizxelMainState";

@Component({
  selector: 'app-quizxel-controller-main',
  templateUrl: './quizxel-controller-main.component.html',
  styleUrls: ['./quizxel-controller-main.component.css']
})
export class QuizxelControllerMainComponent {

  @Input() playerId = "";
  @Input() state = <QuizxelMainState>{}
}
