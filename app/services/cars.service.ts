import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { FileUploader } from 'ng2-file-upload';

@Injectable()

export class CarServices {
    rootApiUrl: string;
    //public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/upload'});


    constructor(private _http: Http){
        this.rootApiUrl = 'http://localhost:5000/';
        console.log('CarServices initialized......')
    }

    getHeaders(){
      var authData = JSON.parse(localStorage.getItem('authData'));
      var headers = new Headers(authData);
      headers.append('Content-Type','application/json');
      return headers;
    }

    getCars(){
        return this._http.get( this.rootApiUrl + 'api/cars', { headers: this.getHeaders() })
            .map(res => res.json());

    }

    addCar(car: any){
        console.log(car);

      //this.uploader.upload(this.rootApiUrl + 'api/cars', JSON.stringify({car: car}), { headers: headers })
      //  .map(res => res.json());

        return this._http.post(this.rootApiUrl + 'api/cars', JSON.stringify({car: car}), { headers: this.getHeaders() })
            .map(res => res.json());
    }



}
