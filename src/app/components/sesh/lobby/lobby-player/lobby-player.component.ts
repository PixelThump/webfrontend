import {Component, Input} from '@angular/core';
import {SeshPlayer} from "../../model/SeshPlayer";

@Component({
  selector: 'app-lobby-player',
  templateUrl: './lobby-player.component.html',
  styleUrls: ['./lobby-player.component.css']
})
export class LobbyPlayerComponent {
  @Input() player?: SeshPlayer;
}
