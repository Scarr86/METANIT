import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<ng-content></ng-content>
    <h2>Привет {{name}}!</h2>
    <p>Имя пользователя: {{userName}}</p>
    <p>Возраст пользователя: {{userAge}}</p>

    <p>ID <input type="number" [ngModel]="userId" (ngModelChange)="onIdCh($event)"> id = {{userId}}</p>
    
    <p>Count
        <button (click)="change(true)">+</button>
        <button (click)="change(false)">-</button>
    </p>
    `,
    styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
    name = "Петр из  child-comp";
    _userAge: number;



    @Input() userName: string;
    // @Input('uId') userId: number;
    @Input() userId: number;

    @Output() onChanged = new EventEmitter<boolean>();
    change(inc:any){
        console.log("emit", inc);
        this.onChanged.emit(inc);
    }

    @Output() userIdChange = new EventEmitter<number>();
    onIdCh(model:number){
        this.userId = model;
        this.userIdChange.emit(model);
        console.log("emit", this.userId);    
    }
    
    @Input()
    set userAge(age: number) {
        if (age < 0)
            this._userAge = 0;
        else if (age > 100)
            this._userAge = 100;
        else
            this._userAge = age;
    }
    get userAge():number {return this._userAge;}
}