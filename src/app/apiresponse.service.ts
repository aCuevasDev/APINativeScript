import { Injectable } from '@angular/core';
import { Pokemon } from './model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class APIResponseService {

  private static pkmn : {name: string, url: string}[];

  constructor(public count: number,public next: string, public previous: string, public results : Pokemon[]) 
  { }

  getCount(){
    return this.count;
  }

  getNext(){
    return this.next;
  }

  getPrevious(){
    return this.previous;
  }

  getResults(){
    return this.results;
  }
}
