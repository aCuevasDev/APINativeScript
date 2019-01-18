import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../pokemon.service';
import { APIResponseService } from '../apiresponse.service';

@Component({
  selector: 'ns-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  moduleId: module.id,
})
export class PokemonsComponent implements OnInit {

  public pokemons : Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(apiResponse => this.pokemons = apiResponse.getResults())
  }

}
