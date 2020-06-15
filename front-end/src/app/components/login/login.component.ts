import { Component, OnInit } from '@angular/core';
import { JwtlarService } from 'src/app/services/jwtlar.service';
import { TokenService } from 'src/app/services/token.service';

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

  constructor(
      private jwtlarService: JwtlarService,
      private tokenService: TokenService
    ) {

  }

  ngOnInit() {

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
  }


  // Error function to handle unauthorized user display
  handleError(error) {
    this.error = error.error.error;
  }

}
