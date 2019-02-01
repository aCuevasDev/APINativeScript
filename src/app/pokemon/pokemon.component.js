"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pokemon_service_1 = require("../pokemon.service");
var PokemonComponent = /** @class */ (function () {
    function PokemonComponent(route, pokemonService) {
        this.route = route;
        this.pokemonService = pokemonService;
    }
    PokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokeName = this.route.snapshot.paramMap.get("pokemonName");
        this.pokemonService.getPokemon(this.pokeName).subscribe(function (pokemon) { return _this.pokemonDetail = pokemon; });
    };
    PokemonComponent = __decorate([
        core_1.Component({
            selector: 'ns-pokemon',
            templateUrl: './pokemon.component.html',
            styleUrls: ['./pokemon.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            pokemon_service_1.PokemonService])
    ], PokemonComponent);
    return PokemonComponent;
}());
exports.PokemonComponent = PokemonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2tlbW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFFakQsc0RBQW9EO0FBUXBEO0lBS0UsMEJBQ1UsS0FBcUIsRUFDckIsY0FBOEI7UUFEOUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUksQ0FBQztJQUU3QyxtQ0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDbkcsQ0FBQztJQVpVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FPaUIsdUJBQWM7WUFDTCxnQ0FBYztPQVA3QixnQkFBZ0IsQ0FjNUI7SUFBRCx1QkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQb2tlbW9uRGV0YWlsIH0gZnJvbSAnLi4vbW9kZWwvcG9rZW1vbkRldGFpbCc7XG5pbXBvcnQgeyBQb2tlbW9uU2VydmljZSB9IGZyb20gJy4uL3Bva2Vtb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXBva2Vtb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9rZW1vbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Bva2Vtb24uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBQb2tlbW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgcG9rZW1vbkRldGFpbDogUG9rZW1vbkRldGFpbDtcbiAgcHVibGljIHBva2VOYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwb2tlbW9uU2VydmljZTogUG9rZW1vblNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucG9rZU5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcInBva2Vtb25OYW1lXCIpO1xuICAgIHRoaXMucG9rZW1vblNlcnZpY2UuZ2V0UG9rZW1vbih0aGlzLnBva2VOYW1lKS5zdWJzY3JpYmUocG9rZW1vbiA9PiB0aGlzLnBva2Vtb25EZXRhaWwgPSBwb2tlbW9uKTtcbiAgfVxuXG59XG4iXX0=