import {  Component, ContentChild, ElementRef} from '@angular/core';

@Component({
    selector: 'child-L4-comp',
    template: ` <p  style="font-size:32px;">counter: {{counter}}</p>
    <p><ng-content></ng-content></p>
    <button class="btn btn-primary" (click)="change()">Edit</button>
    `,
    styles: [`h2, p {color:blue;}`]
})
export class ChildL4Component {
    counter:number = 0;
    
    increment(){this.counter++;}
    decrement(){this.counter--;}

    @ContentChild('headerContent',{static:false})
    header: ElementRef;

    change(){
        console.log('L4 '+ this.header);
        if(this.header) this.header.nativeElement.textContent+=" Kok";
    }

}