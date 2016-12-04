import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubProfileServices {
  username: string;
  client_id: 'fba8d5958240bccfb887';
  client_secret: '37b20309ea23230e02dff2a778a138dd144ce8e8';

  constructor(private http: Http){
    console.log('Github profile service initialized......')
    this.username = 'sahidul03';

  }

  getUser(){
    return this.http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());

  }

}
