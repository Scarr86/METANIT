import { Component } from '@angular/core';
import { LogService } from '../../log.service';


@Component({
    selector: 'child-L8-comp',
    template: `
                <data-comp></data-comp>
                <data-comp></data-comp>
                `,
})
export class ChildL8Component {
    constructor( private logService: LogService){
        logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
    }



}

