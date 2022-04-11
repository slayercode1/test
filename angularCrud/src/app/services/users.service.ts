import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = '/api';

  constructor(
    private http: HttpClient
  ) { }

  //select all users
  getUsers() {
    return this.http.get(this.url);
  }

  //select users by id
  getUser(id: string) {
    return this.http.get<Users[]>(this.url + '/' + id);
  }

  //create new user
  createUser(users: User) {
    return this.http.post(this.url, users);
  }

  //update user
  updateUser(id: string, users: User) {
    return this.http.put(this.url + '/' + id, users);
  }

  //delete user
  deleteUser(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  //delete all users
  deleteAllUsers() {
    return this.http.delete(this.url);
  }

}


export interface User {
  id: string;
  name?: string;
  identifiant: string;
}
