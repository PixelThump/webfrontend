import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SeshAction} from "../../model/action/SeshAction";

@Component({
  selector: 'app-quizxel-controller-lobby',
  templateUrl: './quizxel-controller-lobby.component.html',
  styleUrls: ['./quizxel-controller-lobby.component.css']
})
export class QuizxelControllerLobbyComponent {
  @Input() seshCode?: string;
  @Input() isVip = false;
  @Input() needToAskForVip = true;
  @Input() playerId = "";
  @Output() seshAction: EventEmitter<SeshAction> = new EventEmitter();
  @Output() makeVIP: EventEmitter<SeshAction> = new EventEmitter();

  emitStartSesh() {

    const action: SeshAction = {type: "startSesh", body: true}
    this.seshAction.emit(action);
  }

  emmitMakeVIPEvent() {

    const action: SeshAction = {type: "makeVip", body: this.playerId}
    this.makeVIP.emit(action);
  }

  declineVip() {

    const action: SeshAction = {type: "makeVip", body: false}
    this.makeVIP.emit(action);
  }
}
