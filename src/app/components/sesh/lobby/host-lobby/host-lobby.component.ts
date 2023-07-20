import {Component, Input, OnInit} from '@angular/core';
import {LobbyState} from "../../model/LobbyState";
import {QuizxelPlayer} from "../../quizxel/model/QuizxelPlayer";

@Component({
  selector: 'app-host-lobby',
  templateUrl: './host-lobby.component.html',
  styleUrls: ['./host-lobby.component.css']
})
export class HostLobbyComponent implements OnInit{
  @Input() state: LobbyState = <LobbyState>{};
  players: QuizxelPlayer[] = [];
  seshCode = ""

  ngOnInit(): void {

    console.log(this.state)
  }


}
