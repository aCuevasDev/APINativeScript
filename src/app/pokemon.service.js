"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var PokemonService = /** @class */ (function () {
    //https://docs.nativescript.org/ns-framework-modules/http MIRAR
    function PokemonService(http) {
        this.http = http;
        this.baseURL = "https://pokeapi.co/api/v2";
    }
    PokemonService.prototype.getPokemons = function (url) {
        if (url === void 0) { url = this.baseURL + "/pokemon"; }
        // return getJSON(this.baseURL + "pokemon");
        return this.http.get(url);
    };
    PokemonService.prototype.getPokemon = function (pokeName) {
        return this.http.get(this.baseURL + "/pokemon/" + pokeName);
    };
    PokemonService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLDZDQUErRDtBQU8vRDtJQUVFLCtEQUErRDtJQUUvRCx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUU1QixZQUFPLEdBQUcsMkJBQTJCLENBQUM7SUFGTixDQUFDO0lBSXpDLG9DQUFXLEdBQVgsVUFBWSxHQUF1QztRQUF2QyxvQkFBQSxFQUFBLE1BQWMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVO1FBQ2pELDRDQUE0QztRQUM1QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsUUFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZ0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQWZVLGNBQWM7UUFIMUIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBSzBCLGlCQUFVO09BSnpCLGNBQWMsQ0FnQjFCO0lBQUQscUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJy4vbW9kZWwvcG9rZW1vbic7XHJcbmltcG9ydCB7IEFQSVJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbC9hcGlSZXNwb25zZSc7XHJcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCJcclxuaW1wb3J0IHsgSHR0cEJhY2tlbmQsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFBva2Vtb25EZXRhaWwgfSBmcm9tICcuL21vZGVsL3Bva2Vtb25EZXRhaWwnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBva2Vtb25TZXJ2aWNlIHtcclxuXHJcbiAgLy9odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9ucy1mcmFtZXdvcmstbW9kdWxlcy9odHRwIE1JUkFSXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIHByaXZhdGUgYmFzZVVSTCA9IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92MlwiO1xyXG5cclxuICBnZXRQb2tlbW9ucyh1cmw6IHN0cmluZyA9IHRoaXMuYmFzZVVSTCArIFwiL3Bva2Vtb25cIikge1xyXG4gICAgLy8gcmV0dXJuIGdldEpTT04odGhpcy5iYXNlVVJMICsgXCJwb2tlbW9uXCIpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QVBJUmVzcG9uc2U+KHVybCk7XHJcbiAgfVxyXG5cclxuICBnZXRQb2tlbW9uKHBva2VOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBva2Vtb25EZXRhaWw+KHRoaXMuYmFzZVVSTCArIFwiL3Bva2Vtb24vXCIgKyBwb2tlTmFtZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==