import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../pokemon.service';
import { APIResponse } from '../model/apiResponse';
import { RouterModule } from '@angular/router';
import { NativeScriptRouterModule, RouterExtensions } from 'nativescript-angular/router';



export type RequestType = "next" | "previous";

@Component({
  selector: 'ns-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  moduleId: module.id,
})
export class PokemonsComponent implements OnInit {

  private pokemons: Pokemon[] = [];
  private countPokemon: number = 1; //to get the id of the pkmn
  private nextUrl: string = undefined;
  private previousUrl: string = undefined;
  public loading: boolean = false;

  constructor(private pokemonService: PokemonService, private router: RouterExtensions) { }

  ngOnInit() {
    this.loadPokemons("next");
  }

  loadPokemons(rqstType: RequestType) {
    this.loading = true;
    let url = (rqstType === "next") ? this.nextUrl : this.previousUrl;

    this.pokemonService.getPokemons(url).subscribe(apiResponse => {
      this.setCount(rqstType);
      this.setData(apiResponse);
      this.loading = false;
    });
  }

  setData(apiResponse: APIResponse) {
    this.pokemons = apiResponse.results;
    this.nextUrl = apiResponse.next;
    this.previousUrl = apiResponse.previous;
    console.log("length: " + this.pokemons.length);
  }

  setCount(rqstType: RequestType) {
    this.countPokemon = (rqstType === "next") ? this.countPokemon + this.pokemons.length : this.countPokemon - this.pokemons.length;
    if (this.countPokemon < 1)
      this.countPokemon = 1;
  }


  seeDetail(pokemon: Pokemon) {
    console.log("tap: " + pokemon.name);

    this.router.navigate(["pokemon/" + pokemon.name])
  }
}
