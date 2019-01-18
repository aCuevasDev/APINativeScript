import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Pokemon } from './model/pokemon';
import { APIResponse } from './model/apiResponse';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //https://docs.nativescript.org/ns-framework-modules/http MIRAR

  private baseURL="https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get<APIResponse>(this.baseURL+"/pokemon");
  }
}
