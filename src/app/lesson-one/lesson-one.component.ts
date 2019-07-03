import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';



@Component({
    selector: 'app-lesson-one',
    styleUrls: ['./lesson-one.component.css'],
    templateUrl: '/lesson-one.component.html',

})
export class AppLessonOne {
    myName: string = 'myName';
    colspan: number = 3;
    count: number = 0;
    radius: string = 'wrapper';
    isRed:boolean = true;

    style:string = 'background-color: red;';


    increase(): void;
    //: void {
    //     this.count++;
    // }
    increase($event?: MouseEvent): void {
        this.count++;
        console.log($event instanceof MouseEvent);
        if (typeof $event !== "undefined") console.log($event);

    }
    addWow() {
        if (this.radius.indexOf("radius") == -1)
        this.radius += " radius";
        else
        this.radius = this.radius.replace("radius", '');
    }
}