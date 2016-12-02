import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CarServices {
    rootApiUrl: string;

    constructor(private http: Http){
        this.rootApiUrl = 'http://localhost:5000/';
        console.log('CarServices initialized......')
    }

    getCars(){
        return this.http.get( this.rootApiUrl + 'api/cars')
            .map(res => res.json());

    }

}
