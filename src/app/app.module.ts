import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { LocationService } from './components/home/location.service'
import { HomeService } from './components/home/home.service'
import { HttpClientModule } from '@angular/common/http';
import { WebpushComponent } from './components/webpush/webpush.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebpushComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [LocationService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
