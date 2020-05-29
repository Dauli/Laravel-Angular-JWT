import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // dummy data for form proprety
  public form = {
    email: null,
    password: null
  }

  constructor( private http: HttpClient) { }

  ngOnInit() {

  }

  onSubmit() {
    return this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
