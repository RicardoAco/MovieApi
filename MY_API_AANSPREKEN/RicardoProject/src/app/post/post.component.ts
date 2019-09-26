import { Component, OnInit } from '@angular/core';
import { IMovie, MagicService } from '../services/magic.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  Movie : IMovie = {
    title : null,
    director: null,
    description : null,
    genre : null,
    year : null
  };
  

  constructor(private magicSvc: MagicService) { }

  ngOnInit() {
  }

  Post(){
      this.magicSvc.PostMovie(this.Movie).subscribe((res)=>{
          console.log(res)
      })
}
}