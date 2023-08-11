import {Component, Input} from '@angular/core';
import {QuizxelPlayer} from "../../model/QuizxelPlayer";
import {QuizxelHostLobbyState} from "../../model/state/host/QuizxelHostLobbyState";

@Component({
  selector: 'app-quizxel-host-lobby',
  templateUrl: './quizxel-host-lobby.component.html',
  styleUrls: ['./quizxel-host-lobby.component.css']
})
export class QuizxelHostLobbyComponent {
  @Input() state= <QuizxelHostLobbyState>{};
  players: QuizxelPlayer[] = [];
  seshCode = ""
}
