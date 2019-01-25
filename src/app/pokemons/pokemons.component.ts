import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../pokemon.service';
import { APIResponse } from '../model/apiResponse';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'ns-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  moduleId: module.id,
})
export class PokemonsComponent implements OnInit {

  private pokemons: Pokemon[];
  private countPokemon: number; //to get the id of the pkmn

  constructor(private pokemonService: PokemonService, private route: RouterModule) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(apiResponse => {
      this.pokemons = apiResponse.results;
      console.log("length: " + this.pokemons.length);
    });
  }

  click(pokemon: Pokemon) {
    this.route.
  }
}
