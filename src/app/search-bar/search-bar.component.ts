import { SearchBar } from 'tns-core-modules/ui/search-bar';
import { Component } from '@angular/core';

@Component({
    selector: 'ns-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
    moduleId: module.id,
})
export class SearchBarComponent {

    public searchPhrase: string;

    public onSubmit(args) {
        let searchBar = <SearchBar>args.object;
        alert("You are searching for " + searchBar.text);

    }

    public onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    }

}