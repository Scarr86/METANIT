import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { ExampleUsersComp }   from './ExampleUsers/example-users.comp';

import { ExampleCardUserComp } from './ExampleUsers/ExampleCardUser/example-card-user.comp'
import { HoverDirective } from './ExampleUsers/ExampleCardUser/example-hover.directive';

import { GoogleDriveComp } from './GoogleDrive/google-drive.comp';

@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ ExampleUsersComp, ExampleCardUserComp, HoverDirective, GoogleDriveComp],
    exports: [ ExampleUsersComp, GoogleDriveComp],       // экспортируем компонент
})
export class ExampleModule { }
