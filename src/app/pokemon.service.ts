import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Pokemon } from './model/pokemon';
import { APIResponseService } from './apiresponse.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseURL="https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get<APIResponseService>(this.baseURL+"/pokemon");
  }
}
