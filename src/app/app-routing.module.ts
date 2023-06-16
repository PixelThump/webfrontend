import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./Pages/home-page/home-page.component";
import {HostPageComponent} from "./Pages/host-page/host-page.component";
import {ChatPageComponent} from "./Pages/chat-page/chat-page.component";
import {JoinPageComponent} from "./Pages/join-page/join-page.component";

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
    component:HostPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'join',
    component:JoinPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'chat/:sessionCode/player/:playername',
    component:ChatPageComponent,
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
