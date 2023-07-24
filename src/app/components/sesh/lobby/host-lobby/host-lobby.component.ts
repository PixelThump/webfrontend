import {Component, Input} from '@angular/core';
import {LobbyState} from "../../model/state/LobbyState";
import {QuizxelPlayer} from "../../quizxel/model/QuizxelPlayer";
import {LobbyHostState} from "../../model/state/LobbyHostState";

@Component({
  selector: 'app-host-lobby',
  templateUrl: './host-lobby.component.html',
  styleUrls: ['./host-lobby.component.css']
})
export class HostLobbyComponent{
  @Input() state: LobbyState = <LobbyHostState>{};
  players: QuizxelPlayer[] = [];
  seshCode = ""
}
