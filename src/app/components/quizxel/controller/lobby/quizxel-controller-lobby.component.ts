import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {QuizxelAction} from "../model/QuizxelAction";
import {QuizxelControllerLobbyState} from "../../model/state/controller/QuizxelControllerLobbyState";
import {QuizxelControllerState} from "../../model/state/controller/QuizxelControllerState";
import {PlayerIconName} from "../../host/lobby/player/PlayerIconNames";

@Component({
  selector: 'app-quizxel-controller-lobby',
  templateUrl: './quizxel-controller-lobby.component.html',
  styleUrls: ['./quizxel-controller-lobby.component.css']
})
export class QuizxelControllerLobbyComponent  implements  OnInit, OnChanges{
  @Input() inputState = <QuizxelControllerState>{};
  @Input() needToAskForVip = false;
  state = <QuizxelControllerLobbyState>{}
  @Output() seshAction: EventEmitter<QuizxelAction> = new EventEmitter();
  @Output() makeVIP: EventEmitter<QuizxelAction> = new EventEmitter();
  changeIcon = false;

  ngOnInit(): void {
    console.log(<QuizxelControllerLobbyState> this.inputState)
    console.log(this.inputState)
    this.state = <QuizxelControllerLobbyState> this.inputState;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }

  emitStartSesh() {

    const action: QuizxelAction = {type: "startSesh", body: true}
    this.seshAction.emit(action);
  }

  emmitMakeVIPEvent() {

    const action: QuizxelAction = {type: "makeVip", body: this.state.playerName}
    this.makeVIP.emit(action);
  }

  declineVip() {

    const action: QuizxelAction = {type: "makeVip", body: false}
    this.makeVIP.emit(action);
  }

  emitChangeIconEvent(iconName: PlayerIconName) {

    const action: QuizxelAction = {type: "changeIcon", body: iconName}
    this.makeVIP.emit(action);
    this.changeIcon = false;
  }
}
