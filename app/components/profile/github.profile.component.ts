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
  rootApiUrl: string;

  constructor(private GithubProfileServices: GithubProfileServices){
    this.rootApiUrl = 'http://localhost:5000/';
    this.message = "All cars are shown in here..... :)";
    this.GithubProfileServices.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
    })
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
