import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { PokemonsComponent } from "./pokemons/pokemons.component";

const routes: Routes = [
    { path: "", redirectTo: "/pokemons", pathMatch: "full" },
    { path: "pokemons", component: PokemonsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }