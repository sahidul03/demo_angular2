import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CarServices {
    rootApiUrl: string;

    constructor(private _http: Http){
        this.rootApiUrl = 'http://localhost:5000/';
        console.log('CarServices initialized......')
    }

    getCars(){
        return this._http.get( this.rootApiUrl + 'api/cars')
            .map(res => res.json());

    }

    addCar(car: any){
        console.log(car);
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this._http.post(this.rootApiUrl + 'api/cars', JSON.stringify({car: car}), { headers: headers })
            .map(res => res.json());
    }

}
