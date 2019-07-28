import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { AppLessonOne } from './lesson-one/lesson-one.component';
import { ChildL2Component } from './childL2.component';
import { ChildL3Component } from './childL3.component';
import { ChildL4Component } from './childL4.component';


import { GeoModule } from './geoLocation/geo.module';

//Атрибутные Дерективы
import { DirectiveComp } from './directive/directive.comp';
import {BoldDirective} from './directive/bold.directive';

//Структурные Дерективы
import {ChildL7Component} from './Lesson-7/childL7.component';
import {WhileDirective} from './Lesson-7/while.derective';

//Сервисы и dependency injection
import {ChildL8Component} from './Lesson-8/childL8.component';
import {DataComponent} from './Lesson-8/dataComp/data.comp';
// import { DataService } from './Lesson-8/data.service';
// import { LogService } from './Lesson-8/log.service';

//Работа с формами
//Модуль FormsModule и директива NgModel
import {FormModuleComp} from './Lesson-9-FormsModule/forms-module.comp';

// Работа с сервером HTTP
import { HttpClientModule }   from '@angular/common/http';
import { L10InteractionServer }   from './ch6-L10-HTPP-Interaction-with-server/HttpClient/interaction-server.comp';


// Маршрутизация
import { RoutingModule } from './ch7-Routing/metanit-routing.module';

//Мои примеры
import { ExampleModule } from './ExampleModule/example.module'



@NgModule({
    imports: [
            BrowserModule, 
            FormsModule,
            RouterModule, 


            GeoModule,

            ReactiveFormsModule, 

            HttpClientModule,

            RoutingModule,
            
            ExampleModule,


        ],
    declarations: [
        AppComponent,
        AppLessonOne,
        ChildL2Component,
        ChildL3Component,
        ChildL4Component,

        DirectiveComp,
        BoldDirective,

        ChildL7Component,
        WhileDirective,

        ChildL8Component,
        DataComponent,

        FormModuleComp,

        L10InteractionServer,
    ],
    bootstrap: [AppComponent],
    // providers: [DataService, LogService]
})
export class AppModule { }