import {Component, Input} from '@angular/core';
import {LobbyState} from "../../model/state/LobbyState";
import {LobbyHostState} from "../../model/state/LobbyHostState";
import {QuizxelPlayer} from "../../model/QuizxelPlayer";

@Component({
  selector: 'app-quizxel-host-lobby',
  templateUrl: './quizxel-host-lobby.component.html',
  styleUrls: ['./quizxel-host-lobby.component.css']
})
export class QuizxelHostLobbyComponent {
  @Input() state: LobbyState = <LobbyHostState>{};
  players: QuizxelPlayer[] = [];
  seshCode = ""
}
