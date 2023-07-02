import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import { PageHeaderComponent } from './Components/general/page-header/page-header.component';
import { PageFooterComponent } from './Components/general/page-footer/page-footer.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { HostPageComponent } from './Pages/host-page/host-page.component';
import { HostComponent } from './Components/host/host.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatPageComponent } from './Pages/chat-page/chat-page.component';
import { ChatComponent } from './Components/sesh/chat/chat.component';
import { JoinPageComponent } from './Pages/join-page/join-page.component';
import { JoinComponent } from './Components/join/join.component';
import { HomeComponent } from './Components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ChatUserListComponent } from './Components/sesh/chat/chat-user-list/chat-user-list.component';
import { ChatMessageListComponent } from './Components/sesh/chat/chat-message-list/chat-message-list.component';
import { ChatInputComponent } from './Components/sesh/chat/chat-input/chat-input.component';
import { QuizxelPageComponent } from './pages/quizxel-page/quizxel-page.component';
import { QuizxelHostComponent } from './components/sesh/quizxel/quizxel-host/quizxel-host.component';
import { QuizxelComponent } from './components/sesh/quizxel/quizxel/quizxel.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    HomePageComponent,
    HostPageComponent,
    HostComponent,
    ChatPageComponent,
    ChatComponent,
    JoinPageComponent,
    JoinComponent,
    HomeComponent,
    ChatUserListComponent,
    ChatMessageListComponent,
    ChatInputComponent,
    QuizxelPageComponent,
    QuizxelHostComponent,
    QuizxelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
