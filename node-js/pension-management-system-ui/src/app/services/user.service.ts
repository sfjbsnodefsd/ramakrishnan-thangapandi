import { Injectable } from '@angular/core';
import User from '../entity/User';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:5000/users";
const LOGOUT_URL = "http://localhost:4200/login?signout=true";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUser(user: { email: String, password: String }) {
    return this.http.post(BASE_URL, user);
  }
  logoutUser() {
    return this.http.post(LOGOUT_URL,"")
  }
  constructor(private http: HttpClient) { }
}
