import { Component } from '@angular/core';
import { AuthServices } from '../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'header',
    templateUrl: 'header.component.html',
    providers: [ AuthServices ]
})

export class HeaderComponent {

  constructor(private _authServices : AuthServices){}

  isLoggedIn(){
    return this._authServices.isLoggedIn();
  }

}
