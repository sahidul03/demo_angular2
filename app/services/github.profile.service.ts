import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubProfileServices {
  client_id: string;
  client_secret: string;

  constructor(private http: Http){
    this.client_id = 'fba8d5958240bccfb887';
    this.client_secret = '37b20309ea23230e02dff2a778a138dd144ce8e8';
    console.log('Github profile service initialized......');
  }

  getUser(username){
    return this.http.get('http://api.github.com/users/' + username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());

  }

  getRepos(username){
    return this.http.get('http://api.github.com/users/' + username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());

  }

}
