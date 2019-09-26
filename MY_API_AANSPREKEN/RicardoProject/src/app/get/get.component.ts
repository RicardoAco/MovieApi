import { Component, OnInit } from '@angular/core';
import { MagicService, IMovie } from '../services/magic.service';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  aMovie : IMovie[]

  constructor(private magicSvc: MagicService) { }

  ngOnInit() {
    
  }

  GetMovie(){
    this.magicSvc.GetMovie().subscribe(movie => {
      this.aMovie = movie
      console.log(this.aMovie[0].title) 
    })
  }

}
