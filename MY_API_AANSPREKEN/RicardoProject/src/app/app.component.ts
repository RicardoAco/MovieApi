// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService} from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent implements OnInit {

   constructor(public auth: AuthService) {
    auth.handleAuthentication();
   }

    ngOnInit() {
      this.initalizeApp();
    }

    initalizeApp(){
      this.auth.handleAuthentication();
    }
  }