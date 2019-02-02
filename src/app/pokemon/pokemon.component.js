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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2tlbW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFFakQsc0RBQW9EO0FBUXBEO0lBS0UsMEJBQ1UsS0FBcUIsRUFDckIsY0FBOEI7UUFEOUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUksQ0FBQztJQUU3QyxtQ0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDbkcsQ0FBQztJQVpVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FPaUIsdUJBQWM7WUFDTCxnQ0FBYztPQVA3QixnQkFBZ0IsQ0FjNUI7SUFBRCx1QkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUG9rZW1vbkRldGFpbCB9IGZyb20gJy4uL21vZGVsL3Bva2Vtb25EZXRhaWwnO1xyXG5pbXBvcnQgeyBQb2tlbW9uU2VydmljZSB9IGZyb20gJy4uL3Bva2Vtb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25zLXBva2Vtb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb2tlbW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb2tlbW9uLmNvbXBvbmVudC5jc3MnXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9rZW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyBwb2tlbW9uRGV0YWlsOiBQb2tlbW9uRGV0YWlsO1xyXG4gIHB1YmxpYyBwb2tlTmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBwb2tlbW9uU2VydmljZTogUG9rZW1vblNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucG9rZU5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcInBva2Vtb25OYW1lXCIpO1xyXG4gICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9uKHRoaXMucG9rZU5hbWUpLnN1YnNjcmliZShwb2tlbW9uID0+IHRoaXMucG9rZW1vbkRldGFpbCA9IHBva2Vtb24pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19