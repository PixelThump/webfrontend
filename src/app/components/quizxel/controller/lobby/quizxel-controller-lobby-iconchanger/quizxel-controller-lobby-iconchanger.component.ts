import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PlayerIconName} from "../../../host/lobby/player/PlayerIconNames";

@Component({
  selector: 'app-quizxel-controller-lobby-iconchanger',
  templateUrl: './quizxel-controller-lobby-iconchanger.component.html',
  styleUrls: ['./quizxel-controller-lobby-iconchanger.component.css']
})
export class QuizxelControllerLobbyIconchangerComponent{

  @Input() currentIcon = PlayerIconName.BASIC
  @Output() changeIcon = new EventEmitter<PlayerIconName>()
  imageNames = Object.values(PlayerIconName);

  emitChangeIconEvent(iconName: PlayerIconName){

    this.changeIcon.emit(iconName)
  }
}
