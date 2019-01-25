import { Pokemon } from "./pokemon";



export class APIResponse {

  constructor(public count: number, public next: string, public previous: string, public results: Pokemon[]) { }

  // public getCount() {
  //   return this.count;
  // }

  // public getNext() {
  //   return this.next;
  // }

  // public getPrevious() {
  //   return this.previous;
  // }

  // public getResults() {
  //   return this.results;
  // }
}