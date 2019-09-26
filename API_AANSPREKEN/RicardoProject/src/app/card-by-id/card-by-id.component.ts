import { Component, OnInit } from '@angular/core';
import { MagicService, Card, ICardList } from '../services/magic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-by-id',
  templateUrl: './card-by-id.component.html',
  styleUrls: ['./card-by-id.component.css']
})
export class CardByIdComponent implements OnInit {
  id:any;
  singleCard: Card
  
  constructor(public route: ActivatedRoute,private magicSvc: MagicService) { 

  }

  ngOnInit(){

  }

  SearchId(id){    
    this.magicSvc.GetCardById(id).subscribe((success)=>{
      console.log(success)
      this.singleCard = success;
    }, err => console.log(err.message))
  }
}
