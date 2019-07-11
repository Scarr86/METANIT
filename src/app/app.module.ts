import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {AppLessonOne} from './lesson-one/lesson-one.component';

import {ChildL2Component} from './childL2.component';
import {ChildL3Component} from './childL3.component';
import {ChildL4Component} from './childL4.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ 
        AppLessonOne,
        AppComponent,
        ChildL2Component,
        ChildL3Component,
        ChildL4Component,
     ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }