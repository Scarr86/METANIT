import { Input, Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<ng-content></ng-content>
    <h2>Привет {{name}}!</h2>
    <p>Имя пользователя: {{userName}}</p>
    <p>Возраст пользователя: {{userAge}}</p>
    <p>ID: {{id}}</p>
    `,
    styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
    name = "Петр из  child-comp";
    _userAge: number;
    @Input() userName: string;
    @Input('acc-id') id: number;

    
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