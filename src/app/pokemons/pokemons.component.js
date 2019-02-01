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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUFvRDtBQUdwRCxzREFBeUY7QUFZekY7SUFRRSwyQkFBb0IsY0FBOEIsRUFBVSxNQUF3QjtRQUFoRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQU41RSxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsMkJBQTJCO1FBQ3JELFlBQU8sR0FBVyxTQUFTLENBQUM7UUFDNUIsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDakMsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUV3RCxDQUFDO0lBRXpGLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsUUFBcUI7UUFBbEMsaUJBU0M7UUFSQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVsRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ3hELEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsV0FBd0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLFFBQXFCO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDaEksSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUdELHFDQUFTLEdBQVQsVUFBVSxPQUFnQjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQTNDVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBU29DLGdDQUFjLEVBQWtCLHlCQUFnQjtPQVJ6RSxpQkFBaUIsQ0E0QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJy4uL21vZGVsL3Bva2Vtb24nO1xuaW1wb3J0IHsgUG9rZW1vblNlcnZpY2UgfSBmcm9tICcuLi9wb2tlbW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQVBJUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbC9hcGlSZXNwb25zZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RUeXBlID0gXCJuZXh0XCIgfCBcInByZXZpb3VzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXBva2Vtb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bva2Vtb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcG9rZW1vbnMuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBQb2tlbW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBwb2tlbW9uczogUG9rZW1vbltdID0gW107XG4gIHByaXZhdGUgY291bnRQb2tlbW9uOiBudW1iZXIgPSAxOyAvL3RvIGdldCB0aGUgaWQgb2YgdGhlIHBrbW5cbiAgcHJpdmF0ZSBuZXh0VXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgcHJldmlvdXNVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBva2Vtb25TZXJ2aWNlOiBQb2tlbW9uU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZFBva2Vtb25zKFwibmV4dFwiKTtcbiAgfVxuXG4gIGxvYWRQb2tlbW9ucyhycXN0VHlwZTogUmVxdWVzdFR5cGUpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGxldCB1cmwgPSAocnFzdFR5cGUgPT09IFwibmV4dFwiKSA/IHRoaXMubmV4dFVybCA6IHRoaXMucHJldmlvdXNVcmw7XG5cbiAgICB0aGlzLnBva2Vtb25TZXJ2aWNlLmdldFBva2Vtb25zKHVybCkuc3Vic2NyaWJlKGFwaVJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuc2V0Q291bnQocnFzdFR5cGUpO1xuICAgICAgdGhpcy5zZXREYXRhKGFwaVJlc3BvbnNlKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0RGF0YShhcGlSZXNwb25zZTogQVBJUmVzcG9uc2UpIHtcbiAgICB0aGlzLnBva2Vtb25zID0gYXBpUmVzcG9uc2UucmVzdWx0cztcbiAgICB0aGlzLm5leHRVcmwgPSBhcGlSZXNwb25zZS5uZXh0O1xuICAgIHRoaXMucHJldmlvdXNVcmwgPSBhcGlSZXNwb25zZS5wcmV2aW91cztcbiAgICBjb25zb2xlLmxvZyhcImxlbmd0aDogXCIgKyB0aGlzLnBva2Vtb25zLmxlbmd0aCk7XG4gIH1cblxuICBzZXRDb3VudChycXN0VHlwZTogUmVxdWVzdFR5cGUpIHtcbiAgICB0aGlzLmNvdW50UG9rZW1vbiA9IChycXN0VHlwZSA9PT0gXCJuZXh0XCIpID8gdGhpcy5jb3VudFBva2Vtb24gKyB0aGlzLnBva2Vtb25zLmxlbmd0aCA6IHRoaXMuY291bnRQb2tlbW9uIC0gdGhpcy5wb2tlbW9ucy5sZW5ndGg7XG4gICAgaWYgKHRoaXMuY291bnRQb2tlbW9uIDwgMSlcbiAgICAgIHRoaXMuY291bnRQb2tlbW9uID0gMTtcbiAgfVxuXG5cbiAgc2VlRGV0YWlsKHBva2Vtb246IFBva2Vtb24pIHtcbiAgICBjb25zb2xlLmxvZyhcInRhcDogXCIgKyBwb2tlbW9uLm5hbWUpO1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicG9rZW1vbi9cIiArIHBva2Vtb24ubmFtZV0pXG4gIH1cbn1cbiJdfQ==