import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuizxelPlayer} from "../../model/QuizxelPlayer";

@Component({
  selector: 'app-quizxel-controller-lobby',
  templateUrl: './quizxel-controller-lobby.component.html',
  styleUrls: ['./quizxel-controller-lobby.component.css']
})
export class QuizxelControllerLobbyComponent {

  @Input() players: QuizxelPlayer[] = []
  needToAskForVIP = true
  @Output() makeVIP: EventEmitter<boolean> = new EventEmitter()

  constructor() {

    for (const player of this.players) {

      if(player.vip) {

        this.needToAskForVIP = false
      }
    }
  }

  emmitMakeVIPEvent() {

    this.makeVIP.emit(true);
  }
}
