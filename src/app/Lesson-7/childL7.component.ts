import { Component } from '@angular/core';
import { LogService } from '../../log.service';

@Component({
    selector: 'child-L7-comp',
    templateUrl: './childL7.component.html',
    styles: [`h2, span {color:blue;}`]
})
export class ChildL7Component {
    
    condition:boolean = false;
    
    items =["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"]
    
    myExpression:number = 5;

    SwitchCount(){
        this.myExpression = ++this.myExpression%3;
    }
    toggle(){
        this.condition = !this.condition;
    }

    constructor(private logService: LogService){
        logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
    }

}