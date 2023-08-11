import {Component, Input} from '@angular/core';
import {QuizxelPlayer} from "../../../model/QuizxelPlayer";

@Component({
  selector: 'app-quizxel-host-lobby-player',
  templateUrl: './quizxel-host-lobby-player.component.html',
  styleUrls: ['./quizxel-host-lobby-player.component.css']
})
export class QuizxelHostLobbyPlayerComponent {
  @Input() player?: QuizxelPlayer;
  @Input() showPoints = false;
}
