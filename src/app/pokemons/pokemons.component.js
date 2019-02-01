"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pokemon_service_1 = require("../pokemon.service");
var router_1 = require("nativescript-angular/router");
var PokemonsComponent = /** @class */ (function () {
    function PokemonsComponent(pokemonService, router) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.countPokemon = 1; //to get the id of the pkmn
        this.nextUrl = undefined;
        this.previousUrl = undefined;
    }
    PokemonsComponent.prototype.ngOnInit = function () {
        this.loadPokemons("next");
    };
    PokemonsComponent.prototype.loadPokemons = function (rqstType) {
        var _this = this;
        var url = (rqstType == "next") ? this.nextUrl : this.previousUrl;
        this.countPokemon = (rqstType == "next") ? this.countPokemon + this.pokemons.length : this.countPokemon + this.pokemons.length;
        if (this.countPokemon < 0)
            this.countPokemon = 1;
        this.pokemonService.getPokemons(url).subscribe(function (apiResponse) {
            _this.pokemons = apiResponse.results;
            _this.nextUrl = apiResponse.next;
            _this.previousUrl = apiResponse.previous;
            console.log("length: " + _this.pokemons.length);
        });
    };
    PokemonsComponent.prototype.click = function (pokemon) {
        this.router.navigate(["pokemon" + pokemon.name]);
    };
    PokemonsComponent = __decorate([
        core_1.Component({
            selector: 'ns-pokemons',
            templateUrl: './pokemons.component.html',
            styleUrls: ['./pokemons.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [pokemon_service_1.PokemonService, router_1.RouterExtensions])
    ], PokemonsComponent);
    return PokemonsComponent;
}());
exports.PokemonsComponent = PokemonsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUFvRDtBQUdwRCxzREFBeUY7QUFZekY7SUFPRSwyQkFBb0IsY0FBOEIsRUFBVSxNQUF3QjtRQUFoRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUo1RSxpQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtRQUNyRCxZQUFPLEdBQVcsU0FBUyxDQUFDO1FBQzVCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO0lBRWdELENBQUM7SUFFekYsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxRQUFxQjtRQUFsQyxpQkFZQztRQVhDLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDL0gsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUN4RCxLQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDcEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELGlDQUFLLEdBQUwsVUFBTSxPQUFnQjtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBOUJVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FRb0MsZ0NBQWMsRUFBa0IseUJBQWdCO09BUHpFLGlCQUFpQixDQStCN0I7SUFBRCx3QkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnLi4vbW9kZWwvcG9rZW1vbic7XG5pbXBvcnQgeyBQb2tlbW9uU2VydmljZSB9IGZyb20gJy4uL3Bva2Vtb24uc2VydmljZSc7XG5pbXBvcnQgeyBBUElSZXNwb25zZSB9IGZyb20gJy4uL21vZGVsL2FwaVJlc3BvbnNlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5cblxuZXhwb3J0IHR5cGUgUmVxdWVzdFR5cGUgPSBcIm5leHRcIiB8IFwicHJldmlvdXNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtcG9rZW1vbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9rZW1vbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb2tlbW9ucy5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFBva2Vtb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHBva2Vtb25zOiBQb2tlbW9uW107XG4gIHByaXZhdGUgY291bnRQb2tlbW9uOiBudW1iZXIgPSAxOyAvL3RvIGdldCB0aGUgaWQgb2YgdGhlIHBrbW5cbiAgcHJpdmF0ZSBuZXh0VXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgcHJldmlvdXNVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBva2Vtb25TZXJ2aWNlOiBQb2tlbW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZFBva2Vtb25zKFwibmV4dFwiKTtcbiAgfVxuXG4gIGxvYWRQb2tlbW9ucyhycXN0VHlwZTogUmVxdWVzdFR5cGUpIHtcbiAgICBsZXQgdXJsID0gKHJxc3RUeXBlID09IFwibmV4dFwiKSA/IHRoaXMubmV4dFVybCA6IHRoaXMucHJldmlvdXNVcmw7XG4gICAgdGhpcy5jb3VudFBva2Vtb24gPSAocnFzdFR5cGUgPT0gXCJuZXh0XCIpID8gdGhpcy5jb3VudFBva2Vtb24gKyB0aGlzLnBva2Vtb25zLmxlbmd0aCA6IHRoaXMuY291bnRQb2tlbW9uICsgdGhpcy5wb2tlbW9ucy5sZW5ndGg7XG4gICAgaWYgKHRoaXMuY291bnRQb2tlbW9uIDwgMClcbiAgICAgIHRoaXMuY291bnRQb2tlbW9uID0gMTtcblxuICAgIHRoaXMucG9rZW1vblNlcnZpY2UuZ2V0UG9rZW1vbnModXJsKS5zdWJzY3JpYmUoYXBpUmVzcG9uc2UgPT4ge1xuICAgICAgdGhpcy5wb2tlbW9ucyA9IGFwaVJlc3BvbnNlLnJlc3VsdHM7XG4gICAgICB0aGlzLm5leHRVcmwgPSBhcGlSZXNwb25zZS5uZXh0O1xuICAgICAgdGhpcy5wcmV2aW91c1VybCA9IGFwaVJlc3BvbnNlLnByZXZpb3VzO1xuICAgICAgY29uc29sZS5sb2coXCJsZW5ndGg6IFwiICsgdGhpcy5wb2tlbW9ucy5sZW5ndGgpO1xuICAgIH0pO1xuICB9XG5cblxuICBjbGljayhwb2tlbW9uOiBQb2tlbW9uKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicG9rZW1vblwiICsgcG9rZW1vbi5uYW1lXSlcbiAgfVxufVxuIl19