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

  private pokemons: Pokemon[];
  private countPokemon: number = 1; //to get the id of the pkmn
  private nextUrl: string = undefined;
  private previousUrl: string = undefined;

  constructor(private pokemonService: PokemonService, private router: RouterExtensions) { }

  ngOnInit() {
    this.loadPokemons("next");
  }

  loadPokemons(rqstType: RequestType) {
    let url = (rqstType == "next") ? this.nextUrl : this.previousUrl;
    this.countPokemon = (rqstType == "next") ? this.countPokemon + this.pokemons.length : this.countPokemon + this.pokemons.length;
    if (this.countPokemon < 0)
      this.countPokemon = 1;

    this.pokemonService.getPokemons(url).subscribe(apiResponse => {
      this.pokemons = apiResponse.results;
      this.nextUrl = apiResponse.next;
      this.previousUrl = apiResponse.previous;
      console.log("length: " + this.pokemons.length);
    });
  }


  click(pokemon: Pokemon) {
    this.router.navigate(["pokemon" + pokemon.name])
  }
}
