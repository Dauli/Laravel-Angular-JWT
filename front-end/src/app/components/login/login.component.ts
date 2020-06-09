import { Component, OnInit } from '@angular/core';
import { JwtlarService } from 'src/app/services/jwtlar.service';

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

  constructor( private jwtlarService: JwtlarService) { }

  ngOnInit() {

  }

  // function that post data login to db via laravel
  onSubmit() {
    this.jwtlarService.login(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error) // error handler is called here
    );
  }

  // Error function to handle unauthorized user display
  handleError(error) {
    this.error = error.error.error;
  }

}
