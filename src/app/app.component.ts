import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

class Item {
    purchase: string;//покупка
    done: boolean;//завершинно?
    price: number;//цена
    constructor(purchase: string, price: number) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

@Component({
    selector: 'purchase-app',
    styleUrls: ['./app.component.css'],
    templateUrl:'app.component.html',

})
export class AppComponent implements OnChanges {

    @Input() name:string = "Денис";
    age:number = 24;
    id:number = 55;
    clicks:number = 10;

    isShowModel:boolean = false;
 

    items: Item[] =
        [
            { purchase: "Хлеб", done: false, price: 15.9 },
            { purchase: "Масло", done: false, price: 60 },
            { purchase: "Картофель", done: true, price: 22.6 },
            { purchase: "Сыр", done: false, price: 310 }
        ];
    addItem(text: string, price: number): void {
        console.log(this.items);
        
        if (text == null || text.trim() == "" || price == null)
            return;
        this.items.push(new Item(text, price));
    }
    showAlert(item: Item) {
        alert(item.purchase + " " + item.done);
    }

    delItem(item: Item) {
        this.items.splice(  this.items.indexOf(item), 1);
    }

    onChanged(inc:any){
        if(inc) this.clicks++
        else this.clicks--;
    }


    ngOnChanges(changes: SimpleChanges) {
        
        //Не будет работатть потому что изменения отслеживаются только в дочерних компонентах
        for (let propName in changes) {
          let chng = changes[propName];
          let cur  = JSON.stringify(chng.currentValue);
          let prev = JSON.stringify(chng.previousValue);
          this.print(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }

      }
      private print(msg:string){
          console.log(msg);
      }

      myClick(){
          this.isShowModel = ! this.isShowModel ; 
      }

}