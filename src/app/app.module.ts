import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrokenUrlsComponent } from './components/broken-urls/broken-urls.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './components/home/modal/modal.component';
import {UrlService} from './services/url.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrokenUrlsComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [ UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
