import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./Pages/home-page/home-page.component";
import {HostPageComponent} from "./Pages/host-page/host-page.component";
import {JoinPageComponent} from "./Pages/join-page/join-page.component";
import {QuizxelPageComponent} from "./pages/quizxel-page/quizxel-page.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'host',
    component: HostPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'join',
    component: JoinPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'quizxel/:seshCode/player/:playerName',
    component: QuizxelPageComponent,
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
