import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ChatModule} from "../../projects/chat/src/lib/chat.module";
import { PageHeaderComponent } from './Components/general/page-header/page-header.component';
import { PageFooterComponent } from './Components/general/page-footer/page-footer.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    HomePageComponent,
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
