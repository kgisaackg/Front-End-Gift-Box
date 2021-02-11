import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftBoxFormComponent } from './components/gift-box-form/gift-box-form.component';
import { StatisticBoxComponent } from './components/statistic-box/statistic-box.component'


const routes: Routes = [
  { path: 'gift-box-form', component: GiftBoxFormComponent },
  { path: 'statistic-box', component: StatisticBoxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
