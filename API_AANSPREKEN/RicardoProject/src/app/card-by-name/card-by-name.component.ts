import { Component, OnInit } from '@angular/core';
import { MagicService, Card, ICardList } from '../services/magic.service';

@Component({
  selector: 'app-card-by-name',
  templateUrl: './card-by-name.component.html',
  styleUrls: ['./card-by-name.component.css']
})
export class CardByNameComponent implements OnInit {

  aCards: ICardList
  name : string

  constructor(private magicSvc: MagicService) { }

  ngOnInit() {
  }

  SearchName(name){    
    this.magicSvc.GetCardByName(name).subscribe((success)=>{
      console.log(success)
      this.aCards = success;
      this.aCards.cards
    }, err => console.log(err.message))
  }

}
