import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {AppLessonOne} from './lesson-one/lesson-one.component'
import {ChildComponent} from './child.component'


@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ 
        AppLessonOne,
        AppComponent,
        ChildComponent,
     ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }