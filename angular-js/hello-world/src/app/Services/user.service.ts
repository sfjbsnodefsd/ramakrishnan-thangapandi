import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const BASE_URL = "http://localhost:5000/users"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  saveUser(User: { name: String, age: number, gender: String }) {
    return this.http.post(BASE_URL, User);
  }
  constructor(private http: HttpClient) { }
}
