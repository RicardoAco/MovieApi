import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';

//TOEGEVOEGDE MODULES:
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MagicService } from './services/magic.service';
import {CardModule} from 'primeng/card';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';
import { getComponent } from '@angular/core/src/linker/component_factory_resolver';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    GetComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    RouterModule.forRoot([
      {path: "home",component:HomeComponent},
      {path:"get",component:GetComponent},
      {path:"post",component:PostComponent},
      {path:"",redirectTo: "home", pathMatch: "full"}
    ])
  ],
  providers: [
    MagicService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
