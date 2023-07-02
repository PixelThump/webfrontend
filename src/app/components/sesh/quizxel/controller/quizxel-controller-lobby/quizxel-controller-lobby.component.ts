import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuizxelPlayer} from "../../model/QuizxelPlayer";

@Component({
  selector: 'app-quizxel-controller-lobby',
  templateUrl: './quizxel-controller-lobby.component.html',
  styleUrls: ['./quizxel-controller-lobby.component.css']
})
export class QuizxelControllerLobbyComponent implements OnInit{

  @Input() players: QuizxelPlayer[] = []
  needToAskForVIP = true
  @Output() makeVIP: EventEmitter<boolean> = new EventEmitter()

  ngOnInit(): void {

    for (let player of this.players) {
      console.log(player)
      if(player.vip) {

        this.needToAskForVIP = false
      }
    }
  }

  emmitMakeVIPEvent() {

    this.makeVIP.emit(true);
    this.needToAskForVIP = false
  }


}
