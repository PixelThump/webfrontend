import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RxStompService} from "./rx-stomp.service";
import {rxStompServiceFactory} from "./rx-stomp-service-factory";
import { MessagesComponent } from './messages/messages.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    GameComponent
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
