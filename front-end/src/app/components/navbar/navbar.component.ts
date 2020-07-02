import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // this property not related to AuthService
  public loggedIn:boolean;

  constructor( private authService: AuthService) { }

  ngOnInit() {
    this.authService.authStatus.subscribe( value => this.loggedIn = value);
  }

}
