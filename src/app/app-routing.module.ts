import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftBoxFormComponent } from './components/gift-box-form/gift-box-form.component';
import { StatisticBoxComponent } from './components/statistic-box/statistic-box.component'
import { LandingComponent } from './components/landing/landing.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ShoplandingComponent } from './components/shoplanding/shoplanding.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'gift-box-form', component: GiftBoxFormComponent },
  { path: 'statistic-box', component: StatisticBoxComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'shop', component: ShoplandingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
