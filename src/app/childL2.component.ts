import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
    selector: 'child-L2-comp',
    template: `

    <ng-content></ng-content>

    <h2>Привет {{nameChild}} из child-comp !</h2>
    <h2> Имя nameChild :   
        <input [ngModel]="nameChild" (ngModelChange)="onNameChildCh($event)" />
    </h2>

    <p>Имя пользователя: {{userName}}</p>
    <p>Возраст пользователя: {{userAge}}</p>
    <p>ID <input type="number" [ngModel]="usrId" (ngModelChange)="onIdCh($event)"/> </p>-->
    
    <p>Count
        <button (click)="change(true)">+</button>
        <button (click)="change(false)">-</button>
    </p>
    `,
    styles: [`h2 {color:green;}`]
})
export class ChildL2Component implements OnInit {
    @Input() userName: string;

    constructor(private logService: LogService){
        logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
    }

/*********************************/
  
    //@Output должен иметь формат Наз.переменной+слово Change -> [nameChild]+[Change]
    //Это если нехотим отдельно обрабатывать событие в родительском компоненте

    // <my-sizer [(size)]="fontSizePx"></my-sizer>
    // The two-way binding syntax is really just syntactic sugar for a property binding and an event binding.
    // Angular desugars the SizerComponent binding into this:
    // <my-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></my-sizer> 
    @Input() nameChild = "Петр";
    @Output() nameChildChange = new EventEmitter<string>();
    onNameChildCh(newName: string) {
        this.nameChild = newName;
        this.nameChildChange.emit(newName);
        console.log(newName);
    }
    ngOnInit() {
        this.nameChildChange.emit(this.nameChild);
    }
/********************************************************* */
    _userAge: number;
    @Input()
    set userAge(age: number) {
        if (age < 0)
            this._userAge = 0;
        else if (age > 100)
            this._userAge = 100;
        else
            this._userAge = age;
    }
    get userAge(): number { return this._userAge; }
/********************************************************* */
   
    // @Input('uId') userId: number;
    @Input() usrId: number;
    @Output() usrIdChange = new EventEmitter<number>();
    onIdCh(id: number) {
        this.usrId = id;
        this.usrIdChange.emit(id);
        console.log("emit", this.usrId);
    }
/********************************************************* */

    @Output() onChBtn = new EventEmitter<boolean>();
    change(inc: any) {
        console.log("emit", inc);
        this.onChBtn.emit(inc);
    }




}