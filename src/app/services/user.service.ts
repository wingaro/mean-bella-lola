import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { User } from '../models/user';
import {UsersComponent } from '../components/users/users.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  users: User[];

   //URL LOCAL
  // readonly URL_API = 'http://localhost:3000/api/users';

  //URL HEROKU
  readonly URL_API = '/api/users';

  constructor(public http: HttpClient) { 
    this.selectedUser = new User();
  }

  getUsers(){
    return this.http.get(this.URL_API);
  }

  postUser(User: User) {
    return this.http.post(this.URL_API, User);
  }

  putUser(user: User){
      return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
