import { Component, OnInit } from '@angular/core';
import { JwtlarService } from 'src/app/services/jwtlar.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  public form = {
    email: null
  };

  constructor(
    private jwtlarService: JwtlarService,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit(){
  }

  // submit user email for request to backend
  onSubmit() {
    this.jwtlarService.sendPasswordRequestLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.snotifyService.error(error.error.error)
    );
  }

  // hanndle response to submit
  handleResponse(res) {
    // make form field to null when user has submit email
    this.form.email = null;


  }

}
