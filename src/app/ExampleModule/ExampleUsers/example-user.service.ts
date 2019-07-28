import { Injectable } from "@angular/core";
import { ExampleModule } from "../example.module";

import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface IUser {
    name: string;
    picture: string;
    location: string;
}

export class User implements IUser {
    name: string;
    picture: string;
    location: string;
}
@Injectable({ providedIn: ExampleModule })
export class ExampleUsersService {
    // https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb
    usersUrl: string = 'https://randomuser.me/api/';

    constructor(private http: HttpClient) { }

    users: User[] = [];


    getUsers(num: number): Observable<User[]> {
        // this.usersUrl.toUpperCase
        const params = {
            inc: "gender,name,picture,location",
            results: num.toString(),
            nat: "gb"
        }

        // const inc:HttpParams = new HttpParams().set("inc", "gender,name,picture,location");
        // const results:HttpParams = new HttpParams().set("results", Number(3).toString());
        // const nat:HttpParams = new HttpParams().set("nat","gb");

        // return this.http.get(this.usersUrl, { params:{ 
        //     inc:"gender,name,picture,location", 
        //     results:Number(3).toString(), 
        //     nat:"gb"} 
        // });

        return this.http.get(this.usersUrl, { params })
            .pipe(map((response: any) => {

                let results = response["results"];//= response.results

                return results.map((u: any) => {

                    return {
                        name: u.name.title + ' ' + u.name.first + ' ' + u.name.last,
                        picture: u.picture.large,
                        location: u.location.city + " " + u.location.state + " " + u.location.street
                    }
                })
            }));
    }

}