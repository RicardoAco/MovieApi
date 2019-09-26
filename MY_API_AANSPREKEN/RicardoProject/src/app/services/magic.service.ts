import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  httpOptions : any;
  constructor(private http: HttpClient, private auth: AuthService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.auth.idToken,
        'Content-Type': 'application/json'
      })
    }
   }

  GetMovie()
  {
    return this.http.get<IMovie[]>("https://movieapi-241020.appspot.com/api/movies") 
  }

  PostMovie(movie : IMovie){
    console.log(this.auth.accessToken);
    console.log(this.httpOptions);
    return this.http.post("https://movieapi-241020.appspot.com/api/movies", movie, this.httpOptions);
  }
}

export interface IMovie{
  id?: number;
  title: string;
  director: string;
  description: string;
  genre: string;
  year: number;
}
