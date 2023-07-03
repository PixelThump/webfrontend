import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {QuizxelPlayer} from "../../model/QuizxelPlayer";

@Component({
  selector: 'app-quizxel-controller-lobby',
  templateUrl: './quizxel-controller-lobby.component.html',
  styleUrls: ['./quizxel-controller-lobby.component.css']
})
export class QuizxelControllerLobbyComponent implements OnInit, OnChanges {

  @Input() players: QuizxelPlayer[] = []
  @Input() seshCode = ""
  @Input() playerName = ""
  player: QuizxelPlayer = {playerId: "", playerName: "", vip: false}
  needToAskForVIP = true
  playerCount: number = 0;
  isVip = false;
  private alreadyAskedForVip = false;
  @Output() makeVIP: EventEmitter<boolean> = new EventEmitter()
  @Output() startSesh: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {

    this.updateComponent()
  }

  emmitMakeVIPEvent() {

    this.makeVIP.emit(true)
    this.needToAskForVIP = false
    this.alreadyAskedForVip = true
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.updateComponent()
  }

  private updateComponent() {
    for (let player of this.players) {

      if (player.vip || this.alreadyAskedForVip) {

        this.needToAskForVIP = false
      }
      if (player.playerName === this.playerName) {

        this.player = player;
      }
    }
    this.isVip = this.player.vip
    this.playerCount = this.players.length
  }

  declineVip() {

    this.needToAskForVIP = false
    this.alreadyAskedForVip = true
  }

  emitStartSesh() {

    this.startSesh.emit(true);
  }
}
