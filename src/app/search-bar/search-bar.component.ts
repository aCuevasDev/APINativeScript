import { SearchBar } from 'tns-core-modules/ui/search-bar';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetail } from '../model/pokemonDetail';
import { RouterExtensions } from 'nativescript-angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Pokemon } from '../model/pokemon';
import { Observable } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'ns-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    moduleId: module.id,
})
export class SearchBarComponent implements OnInit {

    ngOnInit(): void {
        this.pokemonService.getAllPokemons().subscribe(apiResponse => {
            this.allPokemons = apiResponse.results;
            console.log("AllPokeComplete: " + this.allPokemons.length);
        })
    }

    constructor(
        private pokemonService: PokemonService,
        private router: RouterExtensions,
        private changeDetector: ChangeDetectorRef
    ) {
        console.log("constructor");

    }
    public searchedPoke: Pokemon[] = [];
    public allPokemons: Pokemon[] = [];
    private pkmn: PokemonDetail;

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        // alert("You are searching for " + searchBar.text);

        // this.pokemonService.getPokemon(searchBar.text).subscribe(pokemon => {
        //     this.pkmn = pokemon
        //     if (this.pkmn) {
        //         this.router.navigate(["pokemon/" + this.pkmn.id]);
        //     }
        // });
        console.log("Searching...........");
        // this.pokemonService.getAllPokemons().subscribe(apiResponse => {
        //     this.allPokemons = apiResponse.results.filter(pkmn => pkmn.name.includes(searchBar.text.toLowerCase()));
        //     console.log("searchComplete: " + this.allPokemons.length);
        //     this.changeDetector.markForCheck();
        // })

    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);

        if (!searchBar.text) {
            this.searchedPoke = undefined;
            this.changeDetector.markForCheck();
        } else {
            this.pokemonService.getAllPokemons().subscribe(apiResponse => {
                this.searchedPoke = apiResponse.results.filter(pkmn => pkmn.name.includes(searchBar.text.toLowerCase()));
                console.log("searchComplete: " + this.allPokemons.length);
                this.changeDetector.markForCheck();
            })
        }

    }

    public searchPoke(searchBar: SearchBar) {
        this.searchedPoke = this.allPokemons.filter(pkmn => pkmn.name.includes(searchBar.text.toLowerCase()));
        console.log("searchedPoke: " + this.searchedPoke.length);
        this.changeDetector.markForCheck();
    }

    public onTap(pokemon: Pokemon) {
        console.log("tap: " + pokemon.name);

        this.router.navigate(["pokemon/" + pokemon.name])
    }

}