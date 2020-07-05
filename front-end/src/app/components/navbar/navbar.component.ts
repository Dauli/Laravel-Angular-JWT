import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // this property not related to AuthService
  public loggedIn:boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.authService.authStatus.subscribe( value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    // prevent default for the href
    event.preventDefault();

    // remove token from localStorage
    this.tokenService.remove();

    // change status of login to false then redirect to home
    this.authService.changeAuthStatus(false);
    this.router.navigateByUrl('/home');
  }

}
