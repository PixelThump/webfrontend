import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-controller-lobby',
  templateUrl: './controller-lobby.component.html',
  styleUrls: ['./controller-lobby.component.css']
})
export class ControllerLobbyComponent {
  @Input() seshCode?: string;
  @Input() isVip = false;
  @Input() needToAskForVip = true;
  @Output() startSesh: EventEmitter<any> = new EventEmitter<any>();
  @Output() makeVip: EventEmitter<boolean> = new EventEmitter<boolean>();


  emitStartSesh() {

    this.startSesh.emit();
  }

  emmitMakeVIPEvent() {

    this.makeVip.emit(true);
  }

  declineVip() {

    this.makeVip.emit(false);
  }


}
