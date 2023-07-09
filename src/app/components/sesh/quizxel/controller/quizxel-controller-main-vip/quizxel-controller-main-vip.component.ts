import {Component, Input} from '@angular/core';
import {QuizxelMainState} from "../../model/QuizxelMainState";

@Component({
  selector: 'app-quizxel-controller-main-vip',
  templateUrl: './quizxel-controller-main-vip.component.html',
  styleUrls: ['./quizxel-controller-main-vip.component.css']
})
export class QuizxelControllerMainVipComponent {

  @Input() playerId = "";
  @Input() state = <QuizxelMainState>{}
}
