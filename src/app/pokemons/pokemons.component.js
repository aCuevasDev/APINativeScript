"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pokemon_service_1 = require("../pokemon.service");
var router_1 = require("nativescript-angular/router");
var PokemonsComponent = /** @class */ (function () {
    function PokemonsComponent(pokemonService, router) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.pokemons = [];
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
        this.pokemonService.getPokemons(url).subscribe(function (apiResponse) {
            _this.setCount(rqstType);
            _this.setData(apiResponse);
        });
    };
    PokemonsComponent.prototype.setData = function (apiResponse) {
        this.pokemons = apiResponse.results;
        this.nextUrl = apiResponse.next;
        this.previousUrl = apiResponse.previous;
        console.log("length: " + this.pokemons.length);
    };
    PokemonsComponent.prototype.setCount = function (rqstType) {
        this.countPokemon = (rqstType == "next") ? this.countPokemon + this.pokemons.length : this.countPokemon + this.pokemons.length;
        if (this.countPokemon < 1)
            this.countPokemon = 1;
    };
    PokemonsComponent.prototype.seeDetail = function (pokemon) {
        console.log("tap: " + pokemon.name);
        this.router.navigate(["pokemon/" + pokemon.name]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUFvRDtBQUdwRCxzREFBeUY7QUFZekY7SUFPRSwyQkFBb0IsY0FBOEIsRUFBVSxNQUF3QjtRQUFoRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUw1RSxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsMkJBQTJCO1FBQ3JELFlBQU8sR0FBVyxTQUFTLENBQUM7UUFDNUIsZ0JBQVcsR0FBVyxTQUFTLENBQUM7SUFFZ0QsQ0FBQztJQUV6RixvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0NBQVksR0FBWixVQUFhLFFBQXFCO1FBQWxDLGlCQU9DO1FBTkMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUN4RCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLFdBQXdCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxRQUFxQjtRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQy9ILElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFHRCxxQ0FBUyxHQUFULFVBQVUsT0FBZ0I7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUF4Q1UsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVFvQyxnQ0FBYyxFQUFrQix5QkFBZ0I7T0FQekUsaUJBQWlCLENBeUM3QjtJQUFELHdCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tICcuLi9tb2RlbC9wb2tlbW9uJztcbmltcG9ydCB7IFBva2Vtb25TZXJ2aWNlIH0gZnJvbSAnLi4vcG9rZW1vbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFQSVJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWwvYXBpUmVzcG9uc2UnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cblxuXG5leHBvcnQgdHlwZSBSZXF1ZXN0VHlwZSA9IFwibmV4dFwiIHwgXCJwcmV2aW91c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1wb2tlbW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wb2tlbW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Bva2Vtb25zLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgUG9rZW1vbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgcG9rZW1vbnM6IFBva2Vtb25bXSA9IFtdO1xuICBwcml2YXRlIGNvdW50UG9rZW1vbjogbnVtYmVyID0gMTsgLy90byBnZXQgdGhlIGlkIG9mIHRoZSBwa21uXG4gIHByaXZhdGUgbmV4dFVybDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIHByZXZpb3VzVXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb2tlbW9uU2VydmljZTogUG9rZW1vblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRQb2tlbW9ucyhcIm5leHRcIik7XG4gIH1cblxuICBsb2FkUG9rZW1vbnMocnFzdFR5cGU6IFJlcXVlc3RUeXBlKSB7XG4gICAgbGV0IHVybCA9IChycXN0VHlwZSA9PSBcIm5leHRcIikgPyB0aGlzLm5leHRVcmwgOiB0aGlzLnByZXZpb3VzVXJsO1xuXG4gICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9ucyh1cmwpLnN1YnNjcmliZShhcGlSZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLnNldENvdW50KHJxc3RUeXBlKTtcbiAgICAgIHRoaXMuc2V0RGF0YShhcGlSZXNwb25zZSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXREYXRhKGFwaVJlc3BvbnNlOiBBUElSZXNwb25zZSkge1xuICAgIHRoaXMucG9rZW1vbnMgPSBhcGlSZXNwb25zZS5yZXN1bHRzO1xuICAgIHRoaXMubmV4dFVybCA9IGFwaVJlc3BvbnNlLm5leHQ7XG4gICAgdGhpcy5wcmV2aW91c1VybCA9IGFwaVJlc3BvbnNlLnByZXZpb3VzO1xuICAgIGNvbnNvbGUubG9nKFwibGVuZ3RoOiBcIiArIHRoaXMucG9rZW1vbnMubGVuZ3RoKTtcbiAgfVxuXG4gIHNldENvdW50KHJxc3RUeXBlOiBSZXF1ZXN0VHlwZSkge1xuICAgIHRoaXMuY291bnRQb2tlbW9uID0gKHJxc3RUeXBlID09IFwibmV4dFwiKSA/IHRoaXMuY291bnRQb2tlbW9uICsgdGhpcy5wb2tlbW9ucy5sZW5ndGggOiB0aGlzLmNvdW50UG9rZW1vbiArIHRoaXMucG9rZW1vbnMubGVuZ3RoO1xuICAgIGlmICh0aGlzLmNvdW50UG9rZW1vbiA8IDEpXG4gICAgICB0aGlzLmNvdW50UG9rZW1vbiA9IDE7XG4gIH1cblxuXG4gIHNlZURldGFpbChwb2tlbW9uOiBQb2tlbW9uKSB7XG4gICAgY29uc29sZS5sb2coXCJ0YXA6IFwiICsgcG9rZW1vbi5uYW1lKTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBva2Vtb24vXCIgKyBwb2tlbW9uLm5hbWVdKVxuICB9XG59XG4iXX0=