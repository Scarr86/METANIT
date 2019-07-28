import { Component } from "@angular/core";
import { GeoService, IGeo } from "./geo.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { LogService } from "../../log.service";

@Component({
    selector: 'exmodule-data-comp',
    templateUrl: './geo.component.html',
    providers: [GeoService]
})
export class GeoComponent {
    messege: string = 'Data Component';

    geo: IGeo | string;

    constructor(private geoService: GeoService, private logService: LogService) { 

        logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
    }
    
    ngOnInit() {
        this.geo = this.geoService.getGeo;
    }

    getSource() {
        // this.geoService.source();
        const subscription = this.geoService.source.subscribe(
            // (val: any) => console.log('next:', val),
            (val: any) => { console.log(val); this.geo = val },
            (err: any) => console.error('error:', err),
            () => console.log('completed')
        );
        // не забываем отписаваться
        setTimeout(() => subscription.unsubscribe(), 4500);
    }

    getCurrentPosition() {
        //Асинхронно вызов?
        this.geo = this.geoService.getCurrentPosition();
        console.log(this.geo);
        if (typeof this.geo === 'string')
            alert(this.geo);
    }

    clearGeo() {
        (this.geo as IGeo).Accuracy = 0;
        (this.geo as IGeo).Latitude = 0;
        (this.geo as IGeo).Longitude = 0;

    }


}