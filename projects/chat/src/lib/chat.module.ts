import { NgModule } from '@angular/core';
import {ChatComponent} from "./chat/chat.component";
import {rxStompServiceFactory} from "./rx-stomp-service-factory";
import {RxStompService} from "./rx-stomp-service.service";
import {ChattersComponent} from "./chatters/chatters.component";
import {ChatlogComponent} from "./chatlog/chatlog.component";
import {NgForOf} from "@angular/common";



@NgModule({
  declarations: [
    ChatComponent,
    ChattersComponent,
    ChatlogComponent
  ],
  imports: [
    NgForOf
  ],
  providers: [{provide: RxStompService, useFactory: rxStompServiceFactory}],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
