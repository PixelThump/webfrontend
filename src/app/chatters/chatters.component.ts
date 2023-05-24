import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-chatters',
  templateUrl: './chatters.component.html',
  styleUrls: ['./chatters.component.css']
})
export class ChattersComponent {

  @Input() public players: string[] =[];
}
