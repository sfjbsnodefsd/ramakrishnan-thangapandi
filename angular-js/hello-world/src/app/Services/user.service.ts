import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import User from '../Entity/User';
const BASE_URL = "http://localhost:5000/users"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  saveUser(User: { name: String, age: number, gender: String }) {
    return this.http.post(BASE_URL, User);
  }
  getUsers() {
    return this.http.get(BASE_URL);
  }
  deleteUser(user) {
    return this.http.delete(BASE_URL + "/" + user.id);
  }
  constructor(private http: HttpClient) { }
}
