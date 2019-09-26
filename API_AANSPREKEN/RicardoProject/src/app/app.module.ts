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
import { CardsComponent } from './cards/cards.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MagicService } from './services/magic.service';
import {CardModule} from 'primeng/card';
import { CardByIdComponent } from './card-by-id/card-by-id.component';
import { CardByNameComponent } from './card-by-name/card-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    ToolbarComponent,
    CardByIdComponent,
    CardByNameComponent
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
      {path:"cards",component:CardsComponent},
      {path:"card-by-id",component:CardByIdComponent},
      {path:"card-by-name",component:CardByNameComponent},
      {path:"",redirectTo: "home", pathMatch: "full"}
    ])
  ],
  providers: [
    MagicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
