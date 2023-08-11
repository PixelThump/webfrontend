import {Component, Input} from '@angular/core';
import {QuizxelPlayer} from "../../model/QuizxelPlayer";
import {QuizxelState} from "../../model/state/QuizxelState";

@Component({
  selector: 'app-quizxel-host-lobby',
  templateUrl: './quizxel-host-lobby.component.html',
  styleUrls: ['./quizxel-host-lobby.component.css']
})
export class QuizxelHostLobbyComponent {
  @Input() state= <QuizxelState>{};
  players: QuizxelPlayer[] = [];
  seshCode = ""
}
