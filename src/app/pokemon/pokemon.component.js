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
        this.pokemonService.getPokemon(this.pokeName).subscribe(function (pokemon) {
            _this.pokemonDetail = pokemon;
            _this.sortTypes();
        });
    };
    PokemonComponent.prototype.sortTypes = function () {
        this.pokemonDetail.types.sort(function (type1, type2) {
            return type1.slot - type2.slot;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb2tlbW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFFakQsc0RBQW9EO0FBUXBEO0lBS0UsMEJBQ1UsS0FBcUIsRUFDckIsY0FBOEI7UUFEOUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUksQ0FBQztJQUU3QyxtQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDN0QsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUE7WUFDNUIsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUN6QyxPQUFPLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF0QlUsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQU9pQix1QkFBYztZQUNMLGdDQUFjO09BUDdCLGdCQUFnQixDQXdCNUI7SUFBRCx1QkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUG9rZW1vbkRldGFpbCB9IGZyb20gJy4uL21vZGVsL3Bva2Vtb25EZXRhaWwnO1xyXG5pbXBvcnQgeyBQb2tlbW9uU2VydmljZSB9IGZyb20gJy4uL3Bva2Vtb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25zLXBva2Vtb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb2tlbW9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb2tlbW9uLmNvbXBvbmVudC5jc3MnXSxcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9rZW1vbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHB1YmxpYyBwb2tlbW9uRGV0YWlsOiBQb2tlbW9uRGV0YWlsO1xyXG4gIHB1YmxpYyBwb2tlTmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBwb2tlbW9uU2VydmljZTogUG9rZW1vblNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucG9rZU5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldChcInBva2Vtb25OYW1lXCIpO1xyXG4gICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9uKHRoaXMucG9rZU5hbWUpLnN1YnNjcmliZShwb2tlbW9uID0+IHtcclxuICAgICAgdGhpcy5wb2tlbW9uRGV0YWlsID0gcG9rZW1vblxyXG4gICAgICB0aGlzLnNvcnRUeXBlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgc29ydFR5cGVzKCkge1xyXG4gICAgdGhpcy5wb2tlbW9uRGV0YWlsLnR5cGVzLnNvcnQoKHR5cGUxLCB0eXBlMikgPT4ge1xyXG4gICAgICByZXR1cm4gdHlwZTEuc2xvdCAtIHR5cGUyLnNsb3Q7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==