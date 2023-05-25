import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-chatlog',
  templateUrl: './chatlog.component.html',
  styleUrls: ['./chatlog.component.css']
})
export class ChatlogComponent {
  @Input() messages: string[] = []

}
