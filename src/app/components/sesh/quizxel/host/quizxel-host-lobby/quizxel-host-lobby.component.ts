import {Component, Input} from '@angular/core';
import {QuizxelPlayer} from "../../model/QuizxelPlayer";


@Component({
  selector: 'app-quizxel-host-lobby',
  templateUrl: './quizxel-host-lobby.component.html',
  styleUrls: ['./quizxel-host-lobby.component.css']
})
export class QuizxelHostLobbyComponent {
  @Input() maxPlayers: number = 5
  @Input() players: QuizxelPlayer[] = []
  @Input() seshCode = ""
}
