import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authSvc: AuthService) { 

  }

  ngOnInit() {
    if(!this.authSvc.isAuthenticated){
      this.authSvc.login();
      console.log(this.authSvc.accessToken);
    }
    else{
      console.log(this.authSvc.accessToken);
      this.authSvc.handleAuthentication()
    }
  }
}
