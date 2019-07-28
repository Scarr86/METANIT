import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from '../HttpClient/user';

@Injectable()
export class HttpServiceObs {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get('src/app/ch6-L10-HTPP-Interaction-with-server/Observable-rsjs/usersObs.json')
      .pipe(map(data => {

        let userList = data['userList'];
        User.num = data['userNum'];
        User.type = data['userType'];

        return userList.map(function (user: any) {
          return { name: user.userName, age: user.userAge };
        });
      }));
  }

  //Всегда возращает ошибку для проверки callback error
  getUsersWhithError(): Observable<User[]> {
    return this.http.get('src/app/ch6-L10-HTPP-Interaction-with-server/Observable-rsjs/usersObsErorr.json')
      .pipe(
        map(data => {
          let userList = data['userList'];
          return userList.map(function (user: any) {
            return { name: user.userName, age: user.userAge };
          });
        }),
        catchError(er => {
          console.log("Из сервиса HttpServiceObs:", er);
          return throwError(er); //throwError("Ошибка из сервиса");
        })
      );
  }
}