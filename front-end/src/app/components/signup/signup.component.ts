import { Component, OnInit } from '@angular/core';
import { JwtlarService } from 'src/app/services/jwtlar.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // Initialization of form object
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

  constructor(
    private jwtlarservice: JwtlarService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  // function that post data login to db via laravel
  onSubmit() {
    this.jwtlarservice.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error) // error handler is called here
    );
  }

  // methode that handle response from tokenService
  handleResponse(data) {
    this.tokenService.handle(data.access_token);

    // redirect to profile component if user signin successfully
    this.router.navigateByUrl('/profile');
  }

  // Error function to handle unauthorized user display
  handleError(error) {
    this.error = error.error.errors;
  }

}
