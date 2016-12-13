import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploader, FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { AboutComponent }  from './components/about.component';
import { HeaderComponent }  from './components/header.component';
import { CarsComponent }  from './components/cars/cars.component';
import { NewCarComponent }  from './components/cars/newCar.component';
import { GithubProfileComponent }  from './components/profile/github.profile.component';
import { routing }  from './app.routing'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent,
                  HeaderComponent, CarsComponent,
                  NewCarComponent, GithubProfileComponent,
                  FileSelectDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
