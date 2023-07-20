import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {PageHeaderComponent} from './components/general/page-header/page-header.component';
import {PageFooterComponent} from './components/general/page-footer/page-footer.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {HostPageComponent} from './pages/host-page/host-page.component';
import {HostComponent} from './components/host/host.component';
import {HttpClientModule} from '@angular/common/http';
import {JoinPageComponent} from './pages/join-page/join-page.component';
import {JoinComponent} from './components/join/join.component';
import {HomeComponent} from './components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {QuizxelPageComponent} from './pages/quizxel-page/quizxel-page.component';
import {QuizxelHostComponent} from './components/sesh/quizxel/host/quizxel-host/quizxel-host.component';
import {QuizxelComponent} from './components/sesh/quizxel/quizxel/quizxel.component';
import {
  QuizxelControllerComponent
} from './components/sesh/quizxel/controller/quizxel-controller/quizxel-controller.component';
import {HostLobbyComponent} from './components/sesh/lobby/host-lobby/host-lobby.component';
import {ControllerLobbyComponent} from './components/sesh/lobby/controller-lobby/controller-lobby.component';
import {LobbyPlayerComponent} from './components/sesh/lobby/lobby-player/lobby-player.component';
import { QuizxelHostMainComponent } from './components/sesh/quizxel/host/quizxel-host-main/quizxel-host-main.component';
import { QuizxelControllerMainComponent } from './components/sesh/quizxel/controller/quizxel-controller-main/quizxel-controller-main.component';
import { QuizxelControllerMainVipComponent } from './components/sesh/quizxel/controller/quizxel-controller-main-vip/quizxel-controller-main-vip.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    HomePageComponent,
    HostPageComponent,
    HostComponent,
    JoinPageComponent,
    JoinComponent,
    HomeComponent,
    QuizxelPageComponent,
    QuizxelHostComponent,
    QuizxelComponent,
    QuizxelControllerComponent,
    HostLobbyComponent,
    ControllerLobbyComponent,
    LobbyPlayerComponent,
    QuizxelHostMainComponent,
    QuizxelControllerMainComponent,
    QuizxelControllerMainVipComponent,
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
