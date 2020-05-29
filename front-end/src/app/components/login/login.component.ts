import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Initialization of email and password on form
  public form = {
    email: null,
    password: null
  }

  // Initialization of error to handle for unauthorized user
  public error = null;

  constructor( private http: HttpClient) { }

  ngOnInit() {

  }

  onSubmit() {
    return this.http.post('http://localhost:8000/api/login', this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error) // error handler is called here
    );
  }

  // Error function to handle unauthorized user display
  handleError(error) {
    this.error = error.error.error;
  }

}
