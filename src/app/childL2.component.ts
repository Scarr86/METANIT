import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-L2-comp',
    template: `
    <ng-content></ng-content>
    <h2>Привет {{nameChild}}!</h2>
    <h2> Имя : 
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
export class ChildL2Component {
    @Input() nameChild = "Петр из  child-comp";
    //@Output должен иметь формат Наз.переменной+слово Change -> [nameChild]+[Change]
    //Это если нехотим обрабатывать событие в родительском компоненте

// <my-sizer [(size)]="fontSizePx"></my-sizer>
// The two-way binding syntax is really just syntactic sugar for a property binding and an event binding.
// Angular desugars the SizerComponent binding into this:
// <my-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></my-sizer>
    @Output() nameChildChange = new EventEmitter<string>();
    onNameChildCh(newName:string){
        this.nameChild = newName;
        this.nameChildChange.emit(newName);
        console.log(newName);   
    }

    _userAge: number;

    @Input() userName: string;
    // @Input('uId') userId: number;
    @Input() usrId: number;

    @Output() onChBtn = new EventEmitter<boolean>();
    change(inc:any){
        console.log("emit", inc);
        this.onChBtn.emit(inc);
    }

    @Output() usrIdChange = new EventEmitter<number>();
    onIdCh(id:number){
        this.usrId = id;
        this.usrIdChange.emit(id);
        console.log("emit", this.usrId);    
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