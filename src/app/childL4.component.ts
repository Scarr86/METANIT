import {  Component, ContentChild, ElementRef} from '@angular/core';
import { LogService } from '../log.service';

@Component({
    selector: 'child-L4-comp',
    template: `
    <p><ng-content></ng-content></p>

    <p style="font-size:16px;">counter: {{counter}}</p>
    

    <button class="btn btn-primary" (click)="change()">child-L4-comp-change()</button>
    `,
    styles: [`h2, p {color:tomato;}`]
})
export class ChildL4Component {
    counter:number = 0;

    constructor(private logService: LogService){
        logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
    }

    
    increment(){this.counter++;}
    decrement(){this.counter--;}

    @ContentChild('headerContent',{static:false})
    header: ElementRef;

    change(){
        console.log('changeL4() '+ this.header);
        if(this.header) this.header.nativeElement.textContent+=" Kok";
    }
}