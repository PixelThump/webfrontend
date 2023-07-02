import {Component, Host, HostBinding} from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  host:{'style': 'flex-grow:1'}
})
export class ChatPageComponent {

  @HostBinding('pageComponent') someClass: Host = true;
}
