import { Component } from '@angular/core';
// Напрямую в компоненте
import { HttpClient } from '@angular/common/http';


import { User } from './user';
// Через сервис 
import { HttpService } from './http.service';

//Observable-rsjs
import { HttpServiceObs } from '../Observable-rsjs/HttpObs.service';
import { map } from 'rxjs/operators';
import { LogService } from '../../../log.service';




@Component({
    selector: 'L10-interaction-server',
    template: `
        <h5> Через компонент простой user.json </h5>
        <div >
            <label>Name</label>
            <input type='text' [value]="user?.name" class="form-control mb-3"/>
            <label>Age</label>
            <input type='text' [value]="user?.age" class="form-control"/>
        </div>
        <hr>


        <h5> Через сервис массив данных user<strong>s</strong>.json </h5>
        <div *ngFor="let user of users; index as i">
            <p>{{i}}</p>
            <label>Name</label>
            <input type='text' [value]="user?.name" class="form-control mb-3"/>
            <label>Age</label>
            <input type='text' [value]="user?.age" class="form-control"/>
        </div>
        
        <hr>

        <h5> Объект Observable и библиотека RxJS </h5>
        <p>User Num: {{userNum}} </p>
        <p>Type: {{userType}} </p>
        <div *ngFor="let user of users; index as i">
            <label>{{i}} Name</label>
            <input type='text' [value]="user?.name" class="form-control mb-3"/>
            <label>Age</label>
            <input type='text' [value]="user?.age" class="form-control"/>
        </div>
        <button (click)="getUsersWhithError()" class="btn btn-info">getUsersWhithError()</button>
        <hr>
        <p>Number: {{num}}<p>
        <button (click)="getNumber()" class="btn btn-info">getNumber()</button>
    `,
    providers: [HttpService, HttpServiceObs],

})
export class L10InteractionServer {
    user: User;

    userNum:number;
    userType: string;

    users: User[] = [];

    error: any;


    num: number = 0;

    constructor(private http: HttpClient, private httpService: HttpService, private httpServiceObs: HttpServiceObs, private logService:LogService) {

            logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
    }

    ngOnInit() {

        // Напрямую в компоненте
        this.http.get('src/app/ch6-L10-HTPP-Interaction-with-server/HttpClient/user.json').subscribe((data:User)=> {
            this.user = data;
        });  

        // Через сервис 
        this.httpService.getData().subscribe((data:User[]) => {
            console.log(data);
            this.users = data['userList']
        });

        //Observable-rsjs
        this.httpServiceObs.getUsers().subscribe((data:User[]) => {
            this.users = data;
            this.userNum = User.num ;
            this.userType = User.type;
        })


    }

    getUsersWhithError() {
        this.httpServiceObs.getUsersWhithError().subscribe(
            (data) => console.log(data),
            er => {
                this.error = er.message;
                console.log("Из компонента L10-interaction-server:", er);
            }
        );
    }


    getNumber() {

        this.httpService.getDataParam(11)
            .subscribe(
                data => { console.log(data); },
                er => {
                    console.log(er);
                });

        //Пример как в json ответе отправлять не только обекты, тут просто чило из number.json
        this.http.get('src/app/ch6-L10-HTPP-Interaction-with-server/HttpClient/number.json')
            .pipe(map((num: number) => num *= 2))
            .subscribe((num: number) => { console.log(num); this.num += num; });

    }
}