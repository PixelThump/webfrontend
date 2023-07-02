import {Component, Input} from '@angular/core';
import {QuizxelPlayer} from "../../model/QuizxelPlayer";

@Component({
  selector: 'app-quizxel-lobby-player',
  templateUrl: './quizxel-lobby-player.component.html',
  styleUrls: ['./quizxel-lobby-player.component.css']
})
export class QuizxelLobbyPlayerComponent {

  @Input() player: QuizxelPlayer = {playername:"", vip:false, playerId: ""}
}
