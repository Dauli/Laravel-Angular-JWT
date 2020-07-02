import { Component, OnInit } from '@angular/core';
import { JwtlarService } from 'src/app/services/jwtlar.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Initialization of email and password on form
  public form = {
    email: null,
    password: null
  }

  // Initialization of error to handle for unauthorized user
  public error = null;

  constructor(
      private jwtlarService: JwtlarService,
      private tokenService: TokenService,
      private router: Router,
      private authService: AuthService
    ) {

  }

  // function that post data login to db via laravel
  onSubmit() {
    this.jwtlarService.login(this.form).subscribe(
      // handle response here by calling handleResponse()
      data => this.handleResponse(data),
      error => this.handleError(error) // error handler is called here
    );
  }


  // methode that handle response from tokenService
  handleResponse(data) {
    this.tokenService.handle(data.access_token);
    this.authService.changeAuthStatus(true); // return true is user logged in
    this.router.navigateByUrl('/profile'); // redirect to profile if user signin
  }

  // Error function to handle unauthorized user display
  handleError(error) {
    this.error = error.error.error;
  }

}
