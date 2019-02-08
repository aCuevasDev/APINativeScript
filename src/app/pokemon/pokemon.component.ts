import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from '../model/pokemonDetail';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'ns-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  moduleId: module.id,
})
export class PokemonComponent implements OnInit {

  public pokemonDetail: PokemonDetail;
  public pokeName: string;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokeName = this.route.snapshot.paramMap.get("pokemonName");
    this.pokemonService.getPokemon(this.pokeName).subscribe(pokemon => {
      this.pokemonDetail = pokemon
      this.sortTypes();
    });

  }

  sortTypes() {
    this.pokemonDetail.types.sort((type1, type2) => {
      return type1.slot - type2.slot;
    });
  }

}
