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
        this.loading = false;
    }
    PokemonsComponent.prototype.ngOnInit = function () {
        this.loadPokemons("next");
    };
    PokemonsComponent.prototype.loadPokemons = function (rqstType) {
        var _this = this;
        this.loading = true;
        var url = (rqstType === "next") ? this.nextUrl : this.previousUrl;
        this.pokemonService.getPokemons(url).subscribe(function (apiResponse) {
            _this.setCount(rqstType);
            _this.setData(apiResponse);
            _this.loading = false;
        });
    };
    PokemonsComponent.prototype.setData = function (apiResponse) {
        this.pokemons = apiResponse.results;
        this.nextUrl = apiResponse.next;
        this.previousUrl = apiResponse.previous;
        console.log("length: " + this.pokemons.length);
    };
    PokemonsComponent.prototype.setCount = function (rqstType) {
        this.countPokemon = (rqstType === "next") ? this.countPokemon + this.pokemons.length : this.countPokemon - this.pokemons.length;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUFvRDtBQUdwRCxzREFBeUY7QUFZekY7SUFRRSwyQkFBb0IsY0FBOEIsRUFBVSxNQUF3QjtRQUFoRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQU41RSxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsMkJBQTJCO1FBQ3JELFlBQU8sR0FBVyxTQUFTLENBQUM7UUFDNUIsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDakMsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUV3RCxDQUFDO0lBRXpGLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsUUFBcUI7UUFBbEMsaUJBU0M7UUFSQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVsRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ3hELEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsV0FBd0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLFFBQXFCO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDaEksSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUdELHFDQUFTLEdBQVQsVUFBVSxPQUFnQjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQTNDVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBU29DLGdDQUFjLEVBQWtCLHlCQUFnQjtPQVJ6RSxpQkFBaUIsQ0E0QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnLi4vbW9kZWwvcG9rZW1vbic7XHJcbmltcG9ydCB7IFBva2Vtb25TZXJ2aWNlIH0gZnJvbSAnLi4vcG9rZW1vbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQVBJUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbC9hcGlSZXNwb25zZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFJlcXVlc3RUeXBlID0gXCJuZXh0XCIgfCBcInByZXZpb3VzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25zLXBva2Vtb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG9rZW1vbnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Bva2Vtb25zLmNvbXBvbmVudC5jc3MnXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9rZW1vbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIHBva2Vtb25zOiBQb2tlbW9uW10gPSBbXTtcclxuICBwcml2YXRlIGNvdW50UG9rZW1vbjogbnVtYmVyID0gMTsgLy90byBnZXQgdGhlIGlkIG9mIHRoZSBwa21uXHJcbiAgcHJpdmF0ZSBuZXh0VXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1VybDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9rZW1vblNlcnZpY2U6IFBva2Vtb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5sb2FkUG9rZW1vbnMoXCJuZXh0XCIpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFBva2Vtb25zKHJxc3RUeXBlOiBSZXF1ZXN0VHlwZSkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGxldCB1cmwgPSAocnFzdFR5cGUgPT09IFwibmV4dFwiKSA/IHRoaXMubmV4dFVybCA6IHRoaXMucHJldmlvdXNVcmw7XHJcblxyXG4gICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9ucyh1cmwpLnN1YnNjcmliZShhcGlSZXNwb25zZSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0Q291bnQocnFzdFR5cGUpO1xyXG4gICAgICB0aGlzLnNldERhdGEoYXBpUmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YShhcGlSZXNwb25zZTogQVBJUmVzcG9uc2UpIHtcclxuICAgIHRoaXMucG9rZW1vbnMgPSBhcGlSZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgdGhpcy5uZXh0VXJsID0gYXBpUmVzcG9uc2UubmV4dDtcclxuICAgIHRoaXMucHJldmlvdXNVcmwgPSBhcGlSZXNwb25zZS5wcmV2aW91cztcclxuICAgIGNvbnNvbGUubG9nKFwibGVuZ3RoOiBcIiArIHRoaXMucG9rZW1vbnMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHNldENvdW50KHJxc3RUeXBlOiBSZXF1ZXN0VHlwZSkge1xyXG4gICAgdGhpcy5jb3VudFBva2Vtb24gPSAocnFzdFR5cGUgPT09IFwibmV4dFwiKSA/IHRoaXMuY291bnRQb2tlbW9uICsgdGhpcy5wb2tlbW9ucy5sZW5ndGggOiB0aGlzLmNvdW50UG9rZW1vbiAtIHRoaXMucG9rZW1vbnMubGVuZ3RoO1xyXG4gICAgaWYgKHRoaXMuY291bnRQb2tlbW9uIDwgMSlcclxuICAgICAgdGhpcy5jb3VudFBva2Vtb24gPSAxO1xyXG4gIH1cclxuXHJcblxyXG4gIHNlZURldGFpbChwb2tlbW9uOiBQb2tlbW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRhcDogXCIgKyBwb2tlbW9uLm5hbWUpO1xyXG5cclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBva2Vtb24vXCIgKyBwb2tlbW9uLm5hbWVdKVxyXG4gIH1cclxufVxyXG4iXX0=