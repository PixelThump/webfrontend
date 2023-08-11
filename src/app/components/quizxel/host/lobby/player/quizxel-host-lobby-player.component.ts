import {Component, Input} from '@angular/core';
import {SeshPlayer} from "../../../model/SeshPlayer";

@Component({
  selector: 'app-quizxel-host-lobby-player',
  templateUrl: './quizxel-host-lobby-player.component.html',
  styleUrls: ['./quizxel-host-lobby-player.component.css']
})
export class QuizxelHostLobbyPlayerComponent {
  @Input() player?: SeshPlayer;
  @Input() showPoints = false;
}
