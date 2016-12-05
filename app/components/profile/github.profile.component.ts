import { Component } from '@angular/core';
import { GithubProfileServices } from '../../services/github.profile.service';

@Component({
  moduleId: module.id,
  selector: 'github-profile',
  templateUrl: 'github.profile.component.html',
  providers: [ GithubProfileServices ]

})

export class GithubProfileComponent {
  message: string;
  cars: Car[];
  user: any;
  repos: any;
  rootApiUrl: string;
  username: string;

  constructor(private GithubProfileServices: GithubProfileServices){
    this.rootApiUrl = 'http://localhost:5000/';
    this.message = "All cars are shown in here..... :)";
    this.username = 'sahidul03';
    this.GithubProfileServices.getUser(this.username).subscribe(user => {
      this.user = user;
    });
    this.GithubProfileServices.getRepos(this.username).subscribe(repos => {
      this.repos = repos;
    });
  }

  searchProfile(){
    this.GithubProfileServices.getUser(this.username).subscribe(user => {
      this.user = user;
    });
    this.GithubProfileServices.getRepos(this.username).subscribe(repos => {
      this.repos = repos;
    });
  }

}


interface Car {
  id: number;
  title: string;
  details: string;
  price: number;
  discount: number;
  photo: any;
}
