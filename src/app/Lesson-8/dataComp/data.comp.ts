import { Component } from '@angular/core';
import {DataService} from '../data.service';
import {LogService} from '../../../log.service';

@Component({
    selector: 'data-comp',
    templateUrl: './data.comp.html',
    styles: [`h2, span {color:blue;}`],
    providers: [DataService, LogService ]
    // использеут серви для каждого компонента отдельно,
    // поэтому мы сервисы добавили в app.module.ts сделали глобальныеми
    // теперь все созданные компоненты будут отбращатся к одному сервису
})
export class DataComponent {

    items: string[] = [];
    constructor(private dataService:DataService){
    }

    ngOnInit(){
        this.items = this.dataService.getData();
    }
    addItem(name: string){
        this.dataService.addData(name);
    }
}
