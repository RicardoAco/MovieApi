import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  constructor(private http: HttpClient) { }

  GetCards(counter)
  {
    return this.http.get<ICardList>("https://api.magicthegathering.io/v1/cards?page=" + counter + "&pageSize=8") 
  }

  GetCardById(id){
    return this.http.get<Card>("https://api.magicthegathering.io/v1/cards/" + id)
  }

  GetCardByName(name){
    return this.http.get<ICardList>("https://api.magicthegathering.io/v1/cards?name=" + name)
  }
}

export interface Ruling {
  date: string;
  text: string;
}

export interface ForeignName {
  name: string;
  text: string;
  flavor: string;
  imageUrl: string;
  language: string;
  multiverseid: number;
}

export interface Legality {
  format: string;
  legality: string;
}

export interface Card {
  name: string;
  manaCost: string;
  cmc: number;
  colors: string[];
  colorIdentity: string[];
  type: string;
  supertypes: string[];
  types: string[];
  subtypes: string[];
  rarity: string;
  set: string;
  setName: string;
  text: string;
  artist: string;
  number: string;
  layout: string;
  multiverseid: number;
  imageUrl: string;
  rulings: Ruling[];
  foreignNames: ForeignName[];
  printings: string[];
  originalText: string;
  originalType: string;
  legalities: Legality[];
  id: string;
  flavor: string;
  power: string;
  toughness: string;
  variations: string[];
}

export interface ICardList {
  cards: Card[];
}