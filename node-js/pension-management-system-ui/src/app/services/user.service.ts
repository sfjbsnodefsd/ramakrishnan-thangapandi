import { Injectable } from '@angular/core';
import User from '../entity/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const AUTH_BASE_URL = "http://localhost:7000/auth-service/users";
const PENSION_DETAILS_BASE_URL = "http://localhost:6001";
const LOGOUT_URL = "http://localhost:4200/login?signout=true";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUser(user: User) {

    // const headers = new HttpHeaders({
    //   "Content-Type": "application/json"
    //   // "Accept": "*/*",
    //   //,"Access-Control-Allow-Origin": "*"
    //   // ,"Access-Control-Allow-Credentials":"true",
    //   //"Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS"      
    // });

    //const requestOptions = { headers: headers };
    // return this.http.post(`${AUTH_BASE_URL}/login`, user, requestOptions);
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
