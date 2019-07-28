import { Component } from '@angular/core';
import { ExampleUsersService, User } from './example-user.service';

@Component({
    selector: 'example-users',
    templateUrl: './example-users.comp.html',
    providers: [ExampleUsersService]
})
export class ExampleUsersComp {

    users:User[] = [];

    constructor (private userService: ExampleUsersService){}

    ngOnInit(){ }

    getUsers(num:number){
        
        if(num === undefined) num = 0;

        this.userService.getUsers(num).subscribe(data =>{
            console.log(data);
            this.users = data;
        },
        er => alert(er.status));
    }

}