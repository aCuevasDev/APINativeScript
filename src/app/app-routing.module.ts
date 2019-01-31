import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { PokemonsComponent } from "./pokemons/pokemons.component";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { Pokemon } from "./model/pokemon";

const routes: Routes = [
    { path: "", redirectTo: "/pokemons", pathMatch: "full" },
    { path: "pokemons", component: PokemonsComponent },
    { path: "pokemon/:pokemonName", component: PokemonComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }