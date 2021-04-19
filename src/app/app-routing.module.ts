import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WebpushComponent } from './components/webpush/webpush.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'webpush', component: WebpushComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
