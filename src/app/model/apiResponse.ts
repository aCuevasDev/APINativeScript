import { Pokemon } from "./pokemon";



export class APIResponse {

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