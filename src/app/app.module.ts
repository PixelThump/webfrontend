import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RxStompService} from "./rx-stomp.service";
import {rxStompServiceFactory} from "./rx-stomp-service-factory";
import { ChatComponent } from './chat/chat.component';
import { GameComponent } from './game/game.component';
import { ChatlogComponent } from './chatlog/chatlog.component';
import { ChattersComponent } from './chatters/chatters.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    GameComponent,
    ChatlogComponent,
    ChattersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{provide: RxStompService, useFactory: rxStompServiceFactory}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
