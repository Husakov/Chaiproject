import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {BrokenUrlsComponent} from '../components/broken-urls/broken-urls.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'brokenurls',component: BrokenUrlsComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }
