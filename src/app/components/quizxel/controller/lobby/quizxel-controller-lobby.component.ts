import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuizxelAction} from "../model/QuizxelAction";
import {QuizxelControllerLobbyState} from "../../model/state/controller/QuizxelControllerLobbyState";

@Component({
  selector: 'app-quizxel-controller-lobby',
  templateUrl: './quizxel-controller-lobby.component.html',
  styleUrls: ['./quizxel-controller-lobby.component.css']
})
export class QuizxelControllerLobbyComponent {
  @Input() state = <QuizxelControllerLobbyState>{};
  @Output() seshAction: EventEmitter<QuizxelAction> = new EventEmitter();
  @Output() makeVIP: EventEmitter<QuizxelAction> = new EventEmitter();

  emitStartSesh() {

    const action: QuizxelAction = {type: "startSesh", body: true}
    this.seshAction.emit(action);
  }

  emmitMakeVIPEvent() {

    const action: QuizxelAction = {type: "makeVip", body: this.state.playerId}
    this.makeVIP.emit(action);
  }

  declineVip() {

    const action: QuizxelAction = {type: "makeVip", body: false}
    this.makeVIP.emit(action);
  }
}
