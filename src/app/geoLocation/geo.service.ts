import { Injectable } from "@angular/core";
import { GeoModule } from "./geo.module";
import { Observable } from 'rxjs';

export interface IGeo{
    Latitude: number,
    Longitude: number,
    Accuracy: number
}

// @Injectable()
@Injectable({providedIn: GeoModule})//? не работает, не знаю почему?
export class GeoService{

    private _geo:IGeo | string = {
        Latitude: undefined,
        Longitude: undefined,
        Accuracy: undefined
    };
    get getGeo(){
        return this._geo;
    }


    // source:Observable<number> = new Observable((observer:any) => {
     source:Observable<any> = Observable.create((observer:any) => {
        let count = 0;
        console.log('Observable created');

        // observer.next(this.getCurrentPosition());
    
        // const timer = setInterval(() => {
        //     observer.next(count);
        //     count++;
        // }, 1000);
        setTimeout(()=>{
            navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
        }, 1000);
        // observer.complete();
        return () => {
            console.log('Observable destroyed');
            // clearInterval(timer);
        }
    });

  
    options:PositionOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    success: PositionCallback = (pos: Position) => {
        // this._geo = "not find";
        // return;
        let crd = pos.coords;
        (<IGeo>this._geo).Latitude = crd.latitude;
        (this._geo as IGeo).Longitude = crd.longitude;
        (this._geo as IGeo).Accuracy = crd.accuracy;
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        //  return this._geo; 
    }

    error: PositionErrorCallback;

    constructor() {
        this.error = function (err: PositionError)  {
            console.log('error');
            console.warn(`ERROR(${err.code}): ${err.message}`);
            this._geo = "Not find position";
        };
    }
  

    getCurrentPosition():IGeo | string {
        (this._geo as IGeo).Accuracy = 0;
        (this._geo as IGeo).Latitude = 0;
        (this._geo as IGeo).Longitude = 0;
        
        setTimeout(()=>{
            navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
        }, 1000);
        // navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
        return this._geo;
    }

}