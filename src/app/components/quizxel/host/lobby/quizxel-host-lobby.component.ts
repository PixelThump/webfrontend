import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {QuizxelHostState} from "../../model/state/host/QuizxelHostState";
import {QuizxelHostLobbyState} from "../../model/state/host/QuizxelHostLobbyState";

@Component({
  selector: 'app-quizxel-host-lobby',
  templateUrl: './quizxel-host-lobby.component.html',
  styleUrls: ['./quizxel-host-lobby.component.css']
})
export class QuizxelHostLobbyComponent implements OnInit, OnChanges {
  @Input() inputState = <QuizxelHostState>{};
  state = <QuizxelHostLobbyState>{};

  ngOnInit(): void {
    this.state = <QuizxelHostLobbyState>this.inputState;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.state = <QuizxelHostLobbyState>this.inputState;
  }
}
