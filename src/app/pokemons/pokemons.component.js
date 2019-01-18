"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pokemon_service_1 = require("../pokemon.service");
var PokemonsComponent = /** @class */ (function () {
    function PokemonsComponent(pokemonService) {
        this.pokemonService = pokemonService;
    }
    PokemonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.getPokemons().subscribe(function (apiResponse) { return _this.pokemons = apiResponse.getResults(); });
    };
    PokemonsComponent = __decorate([
        core_1.Component({
            selector: 'ns-pokemons',
            templateUrl: './pokemons.component.html',
            styleUrls: ['./pokemons.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
    ], PokemonsComponent);
    return PokemonsComponent;
}());
exports.PokemonsComponent = PokemonsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUFvRDtBQVNwRDtJQUlFLDJCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBSSxDQUFDO0lBRXZELG9DQUFRLEdBQVI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLEVBQXhDLENBQXdDLENBQUMsQ0FBQTtJQUN0RyxDQUFDO0lBUlUsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUtvQyxnQ0FBYztPQUp2QyxpQkFBaUIsQ0FVN0I7SUFBRCx3QkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnLi4vbW9kZWwvcG9rZW1vbic7XG5pbXBvcnQgeyBQb2tlbW9uU2VydmljZSB9IGZyb20gJy4uL3Bva2Vtb24uc2VydmljZSc7XG5pbXBvcnQgeyBBUElSZXNwb25zZVNlcnZpY2UgfSBmcm9tICcuLi9hcGlyZXNwb25zZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtcG9rZW1vbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9rZW1vbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb2tlbW9ucy5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFBva2Vtb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgcG9rZW1vbnMgOiBQb2tlbW9uW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb2tlbW9uU2VydmljZTogUG9rZW1vblNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucG9rZW1vblNlcnZpY2UuZ2V0UG9rZW1vbnMoKS5zdWJzY3JpYmUoYXBpUmVzcG9uc2UgPT4gdGhpcy5wb2tlbW9ucyA9IGFwaVJlc3BvbnNlLmdldFJlc3VsdHMoKSlcbiAgfVxuXG59XG4iXX0=