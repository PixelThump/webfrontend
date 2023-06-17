import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.css']
})
export class ChatUserListComponent {
  @Input() users: string[] = [];
}
