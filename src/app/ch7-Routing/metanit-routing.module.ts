import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app.component';
import {AppLessonOne} from '../lesson-one/lesson-one.component';
import {ChildL2Component} from '../childL2.component';
import { ChildL3Component } from '../childL3.component';
import { ChildL4Component } from '../childL4.component';

const routes: Routes = [
  {path:'', component: AppLessonOne},
  {path:'lesson1', component: AppLessonOne},
  {path:'lesson2', component:ChildL2Component},
  {path:'lesson3', component:ChildL3Component},
  {path:'lesson4', component: ChildL4Component},
  {path:'**', component: AppLessonOne}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

