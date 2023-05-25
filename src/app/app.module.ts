import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {GameComponent} from './game/game.component';
import {ChatModule} from "../../projects/chat/src/lib/chat.module";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
