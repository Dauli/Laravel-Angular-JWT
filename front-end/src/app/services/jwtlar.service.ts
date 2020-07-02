import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtlarService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  // login user in fuctionality
  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  // singup functionality
  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }
}
