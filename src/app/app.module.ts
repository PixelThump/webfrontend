import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageHeaderComponent} from "./components/page/header/page-header.component";
import {PageFooterComponent} from "./components/page/footer/page-footer.component";
import {HomePageComponent} from './pages/home-page/home-page.component';
import {HostPageComponent} from './pages/host-page/host-page.component';
import {HostComponent} from './components/host/host.component';
import {HttpClientModule} from '@angular/common/http';
import {JoinPageComponent} from './pages/join-page/join-page.component';
import {JoinComponent} from './components/join/join.component';
import {HomeComponent} from './components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {QuizxelPageComponent} from './pages/quizxel-page/quizxel-page.component';
import {QuizxelHostComponent} from "./components/quizxel/host/quizxel-host.component";
import {QuizxelComponent} from "./components/quizxel/quizxel.component";
import {QuizxelControllerComponent} from "./components/quizxel/controller/quizxel-controller.component";
import {QuizxelHostLobbyComponent} from "./components/quizxel/host/lobby/quizxel-host-lobby.component";
import {
  QuizxelControllerLobbyComponent
} from "./components/quizxel/controller/lobby/quizxel-controller-lobby.component";
import {QuizxelHostMainComponent} from "./components/quizxel/host/main/quizxel-host-main.component";
import {
  QuizxelControllerMainPlayerComponent
} from "./components/quizxel/controller/main/player/quizxel-controller-main-player.component";
import {
  QuizxelControllerMainVipComponent
} from "./components/quizxel/controller/main/vip/quizxel-controller-main-vip.component";
import {
  QuizxelHostPlayerImageComponent
} from "./components/quizxel/host/lobby/player/quizxel-host-playerImage.component";
import { QuizxelControllerLobbyIconchangerComponent } from './components/quizxel/controller/lobby/quizxel-controller-lobby-iconchanger/quizxel-controller-lobby-iconchanger.component';


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
    QuizxelComponent,
    QuizxelHostComponent,
    QuizxelControllerComponent,
    QuizxelHostLobbyComponent,
    QuizxelHostPlayerImageComponent,
    QuizxelControllerLobbyComponent,
    QuizxelHostMainComponent,
    QuizxelControllerMainPlayerComponent,
    QuizxelControllerMainVipComponent,
    QuizxelControllerLobbyIconchangerComponent,
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
