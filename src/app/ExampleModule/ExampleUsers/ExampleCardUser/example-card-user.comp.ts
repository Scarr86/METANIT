import { Component, Input } from '@angular/core';
import { User } from '../example-user.service';

@Component({
    selector: 'example-card-user',
    templateUrl: './example-card-user.comp.html',
    styleUrls: ['./example-card-user.comp.css'],
})
export class ExampleCardUserComp {

    @Input() user:User;
    isMarked:boolean = false;

    onClick(){
        this.isMarked = true;
    }
}