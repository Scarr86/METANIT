import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { GeoComponent }   from './geo.component';
// import { GeoService } from './geo.service';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ GeoComponent],
    exports: [ GeoComponent],       // экспортируем компонент
    // providers: [GeoService]

})
export class GeoModule { }
