import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FileUploader, FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import { HeaderComponent }  from './components/header.component';
import { CarsComponent }  from './components/cars/cars.component';
import { NewCarComponent }  from './components/cars/newCar.component';
import { GithubProfileComponent }  from './components/profile/github.profile.component';
import { SigninComponent }  from './components/common/signin.component';
import { SignupComponent }  from './components/common/signup.component';

import { routing }  from './app.routing'

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent,
                  HeaderComponent, CarsComponent,
                  NewCarComponent, GithubProfileComponent,
                  FileSelectDirective, SigninComponent, SignupComponent ],
    providers: [  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
