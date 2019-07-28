import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class HttpService{
    constructor(private http: HttpClient){    }

    getData(){
      return  this.http.get('src/app/ch6-L10-HTPP-Interaction-with-server/HttpClient/users.json');
    }
    getDataParam(num:number){
        const params:HttpParams = new HttpParams().set("number", num.toString());

        return this.http.get('src/app/ch6-L10-HTPP-Interaction-with-server/HttpClient/users.json',{params});
    }
}