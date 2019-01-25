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
        this.pokemonService.getPokemons().subscribe(function (apiResponse) {
            _this.pokemons = apiResponse.results;
            console.log("length: " + _this.pokemons.length);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUFvRDtBQVVwRDtJQUtFLDJCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBSSxDQUFDO0lBRXZELG9DQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUNyRCxLQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFaVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBTW9DLGdDQUFjO09BTHZDLGlCQUFpQixDQWE3QjtJQUFELHdCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tICcuLi9tb2RlbC9wb2tlbW9uJztcbmltcG9ydCB7IFBva2Vtb25TZXJ2aWNlIH0gZnJvbSAnLi4vcG9rZW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFQSVJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWwvYXBpUmVzcG9uc2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXBva2Vtb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bva2Vtb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9rZW1vbnMuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBQb2tlbW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBwb2tlbW9uczogUG9rZW1vbltdO1xuICBwcml2YXRlIGNvdW50UG9rZW1vbjogbnVtYmVyOyAvL3RvIGdldCB0aGUgaWQgb2YgdGhlIHBrbW5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBva2Vtb25TZXJ2aWNlOiBQb2tlbW9uU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9ucygpLnN1YnNjcmliZShhcGlSZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnBva2Vtb25zID0gYXBpUmVzcG9uc2UucmVzdWx0cztcbiAgICAgIGNvbnNvbGUubG9nKFwibGVuZ3RoOiBcIiArIHRoaXMucG9rZW1vbnMubGVuZ3RoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19