import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // Initialization of name, email, password and password_confirm on form
  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  }

  // Initialization of error to handle for unauthorized user
  public error = {
    name: null,
    email: null,
    password: null
  };

  constructor( private http: HttpClient ) { }

  // function that post data login to db via laravel
  onSubmit() {
    return this.http.post('http://localhost:8000/api/signup', this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error) // error handler is called here
    );
  }

  ngOnInit() {

  }

  // Error function to handle unauthorized user display
  handleError(error) {
    this.error = error.error.errors;
  }

}
