import { Pokemon } from "./pokemon";



export class APIResponse {

  constructor(public count: number, public next: string, public previous: string, public results: Pokemon[]) { }
}