import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthServices {
    rootApiUrl: string;

    constructor(private http: Http){
        console.log('AuthService initialized......');
        this.rootApiUrl = 'http://localhost:5000/';
    }

    login(loginInfo: any){
        return this.http.post( this.rootApiUrl + 'auth/sign_in', { email: loginInfo.email, password: loginInfo.password })
            .map(response => {
                var authData = {
                    "access-token": response.headers.get('access-token'),
                    "client": response.headers.get('client'),
                    "expiry": response.headers.get('expiry'),
                    "token-type": response.headers.get('token-type'),
                    "uid": response.headers.get('uid')
                };
                localStorage.setItem('authData', JSON.stringify(authData));
                console.log(authData);
            });
    }

}
