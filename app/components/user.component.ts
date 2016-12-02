import { Component } from '@angular/core';
import { PostServices } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [ PostServices ]
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private PostService: PostServices){
    this.name = 'Md. Sahidul Islam';
    this.email = 'sahidul03@gmail.com';
    this.address = {
      street: '268 west agargoan',
      city: 'Dhaka',
      country: 'Bangladesh'
    };
    this.hobbies = ['Music', 'Sports', 'Swimming'];
    this.showHobbies = false;
    this.PostService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: string){
    this.hobbies.push(hobby);
  }

  deleteHobby(index: number){
    this.hobbies.splice(index, 1);
  }
}

interface address {
  street : string;
  city: string;
  country: string;
}

interface Post{
  id: number;
  title: string;
  body: string;
  userId: number;
}

