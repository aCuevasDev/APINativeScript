import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Pokemon } from './model/pokemon';
import { APIResponse } from './model/apiResponse';
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http"
import { HttpBackend, HttpClient } from '@angular/common/http';
import { PokemonDetail } from './model/pokemonDetail';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //https://docs.nativescript.org/ns-framework-modules/http MIRAR

  constructor(private http: HttpClient) { }

  private baseURL = "https://pokeapi.co/api/v2";

  getPokemons(url: string = this.baseURL + "/pokemon") {
    // return getJSON(this.baseURL + "pokemon");
    return this.http.get<APIResponse>(url);
  }

  getPokemon(pokeName: string) {
    return this.http.get<PokemonDetail>(this.baseURL + "/pokemon/" + pokeName);
  }

  getAllPokemons() {
    return this.http.get<APIResponse>(this.baseURL + "/pokemon?limit=1000");
  }

}
