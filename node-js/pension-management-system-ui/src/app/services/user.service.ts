import { Injectable } from '@angular/core';
import User from '../entity/User';
import { HttpClient } from '@angular/common/http';

const AUTH_BASE_URL = "http://localhost:6000/auth-service/users";
const PENSION_DETAILS_BASE_URL = "http://localhost:6001";
const LOGOUT_URL = "http://localhost:4200/login?signout=true";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUser(user: User) {
    return this.http.post(`${AUTH_BASE_URL}/login`, user);
  }
  logoutUser() {
    return this.http.post(LOGOUT_URL, "");
  }
  getPensionerByAadhar(user: User) {
    return this.http.get(`${PENSION_DETAILS_BASE_URL}/pensioner/getByAadhar/${user.aadhar}`);
  }
  constructor(private http: HttpClient) { }
}
