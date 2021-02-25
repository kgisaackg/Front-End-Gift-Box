import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LandingComponent } from './components/landing/landing.component';
import { GiftBoxFormComponent } from './components/gift-box-form/gift-box-form.component';
import { StatisticBoxComponent } from './components/statistic-box/statistic-box.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ShoplandingComponent } from './components/shoplanding/shoplanding.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GiftBoxFormComponent,
    StatisticBoxComponent,
    AboutusComponent,
    ShoplandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
