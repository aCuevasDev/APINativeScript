import { SearchBar } from 'tns-core-modules/ui/search-bar';
import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetail } from '../model/pokemonDetail';
import { RouterExtensions } from 'nativescript-angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
    selector: 'ns-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
    moduleId: module.id,
})
export class SearchBarComponent {

    constructor(private pokemonService: PokemonService, private router: RouterExtensions) { }

    private pkmn: PokemonDetail;

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);
        this.pokemonService.getPokemon(searchBar.text).subscribe(pokemon => {
            this.pkmn = pokemon
            if (this.pkmn) {
                this.router.navigate(["pokemon/" + this.pkmn.id]);
            }
        });

    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }

}