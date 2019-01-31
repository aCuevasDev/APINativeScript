"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pokemon_service_1 = require("../pokemon.service");
var router_1 = require("nativescript-angular/router");
var PokemonsComponent = /** @class */ (function () {
    function PokemonsComponent(pokemonService, router) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.countPokemon = 0; //to get the id of the pkmn
        this.nextUrl = undefined;
        this.previousUrl = undefined;
    }
    PokemonsComponent.prototype.ngOnInit = function () {
        this.loadPokemons("next");
    };
    PokemonsComponent.prototype.loadPokemons = function (rqstType) {
        var _this = this;
        var url = (rqstType == "next") ? this.nextUrl : this.previousUrl;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUFvRDtBQUdwRCxzREFBeUY7QUFZekY7SUFPRSwyQkFBb0IsY0FBOEIsRUFBVSxNQUF3QjtRQUFoRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUo1RSxpQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtRQUNyRCxZQUFPLEdBQVcsU0FBUyxDQUFDO1FBQzVCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO0lBRWdELENBQUM7SUFFekYsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxRQUFxQjtRQUFsQyxpQkFTQztRQVJDLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRWpFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDeEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNoQyxLQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxpQ0FBSyxHQUFMLFVBQU0sT0FBZ0I7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQTNCVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBUW9DLGdDQUFjLEVBQWtCLHlCQUFnQjtPQVB6RSxpQkFBaUIsQ0E0QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJy4uL21vZGVsL3Bva2Vtb24nO1xuaW1wb3J0IHsgUG9rZW1vblNlcnZpY2UgfSBmcm9tICcuLi9wb2tlbW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQVBJUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbC9hcGlSZXNwb25zZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RUeXBlID0gXCJuZXh0XCIgfCBcInByZXZpb3VzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXBva2Vtb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bva2Vtb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9rZW1vbnMuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBQb2tlbW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBwb2tlbW9uczogUG9rZW1vbltdO1xuICBwcml2YXRlIGNvdW50UG9rZW1vbjogbnVtYmVyID0gMDsgLy90byBnZXQgdGhlIGlkIG9mIHRoZSBwa21uXG4gIHByaXZhdGUgbmV4dFVybDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIHByZXZpb3VzVXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb2tlbW9uU2VydmljZTogUG9rZW1vblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRQb2tlbW9ucyhcIm5leHRcIik7XG4gIH1cblxuICBsb2FkUG9rZW1vbnMocnFzdFR5cGU6IFJlcXVlc3RUeXBlKSB7XG4gICAgbGV0IHVybCA9IChycXN0VHlwZSA9PSBcIm5leHRcIikgPyB0aGlzLm5leHRVcmwgOiB0aGlzLnByZXZpb3VzVXJsO1xuXG4gICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9ucyh1cmwpLnN1YnNjcmliZShhcGlSZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnBva2Vtb25zID0gYXBpUmVzcG9uc2UucmVzdWx0cztcbiAgICAgIHRoaXMubmV4dFVybCA9IGFwaVJlc3BvbnNlLm5leHQ7XG4gICAgICB0aGlzLnByZXZpb3VzVXJsID0gYXBpUmVzcG9uc2UucHJldmlvdXM7XG4gICAgICBjb25zb2xlLmxvZyhcImxlbmd0aDogXCIgKyB0aGlzLnBva2Vtb25zLmxlbmd0aCk7XG4gICAgfSk7XG4gIH1cblxuXG4gIGNsaWNrKHBva2Vtb246IFBva2Vtb24pIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwb2tlbW9uXCIgKyBwb2tlbW9uLm5hbWVdKVxuICB9XG59XG4iXX0=