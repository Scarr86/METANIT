import { Component, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { ChildL4Component } from './childL4.component';

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
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnChanges {

    name: string = `Денис`;
    nameChild: string = 'nameChild';
    age: number = 24;
    id: number = 55;

    clicks: number = 10;



    //************ Первая программа покупателя*/
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
        this.items.splice(this.items.indexOf(item), 1);
    }
    /********************************************************* */
    /*****************LESSON 2 ***************************/
    onChanged(inc: any) {
        if (inc) this.clicks++
        else this.clicks--;

    }

    /*****LESSON 3 ********************************************/
    ngOnChanges(changes: SimpleChanges) {
        //Не будет работатть потому что изменения отслеживаются только в дочерних компонентах
        for (let propName in changes) {
            let chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.log(`PARENT:${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }
    private log(msg: string) {
        console.log(msg);
    }

    /********* LESSON 4 *****************/

    @ViewChild(ChildL4Component, { static: false })
    private counterComponent: ChildL4Component;

    inc() { this.counterComponent.increment(); }

    dec() { this.counterComponent.decrement(); }

    //Привязка ViewChild к шаблонным переменным
    @ViewChild('nameText', { static: true })
    nameParagraph: ElementRef;

    nameL4 = 'Joj';

    changeL4() {
        console.log('L4 ' + this.nameParagraph.nativeElement.textContent);
        this.nameParagraph.nativeElement.textContent = "hell";
    }





















    // 
    // 
    // 
    options:PositionOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    success: PositionCallback = (pos: Position) => {
        let crd = pos.coords;
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    error: PositionErrorCallback;

    constructor() {
        this.error = function (err: PositionError)  {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        };
    }
    getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
    }



}