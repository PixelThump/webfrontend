import {Component, Input} from '@angular/core';
import {QuizxelMainState} from "../../model/QuizxelMainState";

@Component({
  selector: 'app-quizxel-host-main',
  templateUrl: './quizxel-host-main.component.html',
  styleUrls: ['./quizxel-host-main.component.css']
})
export class QuizxelHostMainComponent {

  @Input() state = <QuizxelMainState>{}
}
