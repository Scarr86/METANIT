import {
    Component,
    Input,
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy,
    SimpleChanges,
    EventEmitter,
    Output
} from '@angular/core';

@Component({
    selector: 'child-2-comp',
    template: `  
    <h2>Привет {{name}}!</h2><hr>
    <button (click)="myClick()" > ModalForm </button> 
    `,
    styles: [`h2, p {color:tomato;}`]
})
export class Child2Component implements OnInit, OnDestroy, OnChanges {
    @Input() name = "Tom";
   count:number = 1;
   @Output() myOnClick = new EventEmitter<boolean>();





    constructor() { this.log('constructor child 2') }


    myClick(){
        this.myOnClick.emit(true);
        this.log(`emit`);
    }

    ngOnDestroy() { this.log('onDestroy child 2') }
    
    // ngOnChanges(changes: SimpleChanges) {
    //     for (let propName in changes) {
    //         let chng = changes[propName];
    //         let cur = JSON.stringify(chng.currentValue);
    //         let prev = JSON.stringify(chng.previousValue);
    //         this.print(`CHILD: ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    //     }
    // }

    ngOnInit() {
       
        this.log(`ngOnInit`);
      }
      ngOnChanges() {
         
        this.log(`OnChanges`);
      }
      ngDoCheck() {
         
        this.log(`ngDoCheck`);
      }
      ngAfterViewInit() {
         
        this.log(`ngAfterViewInit`);
      }
      ngAfterViewChecked() {
         
        this.log(`ngAfterViewChecked`);
      }
      ngAfterContentInit() {
         
        this.log(`ngAfterContentInit`);
      }
      ngAfterContentChecked() {
         
        this.log(`ngAfterContentChecked`);
      }
   
      private log(msg: string) {
          console.log(this.count + ". " + msg);
          this.count++;
      }
}