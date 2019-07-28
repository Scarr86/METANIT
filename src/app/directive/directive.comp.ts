import {Component} from '@angular/core';
import { LogService } from '../../log.service';

@Component({
    selector: 'directive-comp',
    templateUrl: './directive.comp.html',
    styleUrls: ['./directive.comp.css']
    
})
export class DirectiveComp {
    constructor(private logService: LogService){
        logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
    }


    isVerdana: boolean = true;
    isSegoe: boolean = true;

    isNavy: boolean = true;

    visibility:boolean = false;

    currentClasses = {
        verdataFont: this.isVerdana,
        navyColor: this.isNavy
    }

    toggle(){
        this.visibility = !this.visibility; 
    }
}
