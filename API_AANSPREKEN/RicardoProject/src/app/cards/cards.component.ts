import { Component, OnInit } from '@angular/core';
import { MagicService, Card, ICardList } from '../services/magic.service';
import * as _ from "lodash"
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  pageCounter : number

  aCards : ICardList //Lijst met kaarten (5 in totaal)

  constructor(public route: Router, private magicSvc: MagicService) {
    
   }

  ngOnInit() {

    this.pageCounter = 1

    this.magicSvc.GetCards(this.pageCounter).subscribe(cardList => {
      this.aCards = cardList
    })
  }  
  
  Next(){
    this.pageCounter++;
      this.magicSvc.GetCards(this.pageCounter).subscribe(success => {
        this.aCards = success;
      });
  }

  Back(){
    this.pageCounter--;
      this.magicSvc.GetCards(this.pageCounter).subscribe(success => {
        this.aCards = success;
      });
  }
}