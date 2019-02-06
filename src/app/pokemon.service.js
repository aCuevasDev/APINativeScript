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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLDZDQUErRDtBQU8vRDtJQUVFLCtEQUErRDtJQUUvRCx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUU1QixZQUFPLEdBQUcsMkJBQTJCLENBQUM7SUFGTixDQUFDO0lBSXpDLG9DQUFXLEdBQVgsVUFBWSxHQUF1QztRQUF2QyxvQkFBQSxFQUFBLE1BQWMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVO1FBQ2pELDRDQUE0QztRQUM1QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsUUFBZ0I7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZ0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQWZVLGNBQWM7UUFIMUIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBSzBCLGlCQUFVO09BSnpCLGNBQWMsQ0FnQjFCO0lBQUQscUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnLi9tb2RlbC9wb2tlbW9uJztcbmltcG9ydCB7IEFQSVJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbC9hcGlSZXNwb25zZSc7XG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiXG5pbXBvcnQgeyBIdHRwQmFja2VuZCwgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFBva2Vtb25EZXRhaWwgfSBmcm9tICcuL21vZGVsL3Bva2Vtb25EZXRhaWwnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBva2Vtb25TZXJ2aWNlIHtcblxuICAvL2h0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL25zLWZyYW1ld29yay1tb2R1bGVzL2h0dHAgTUlSQVJcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIHByaXZhdGUgYmFzZVVSTCA9IFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92MlwiO1xuXG4gIGdldFBva2Vtb25zKHVybDogc3RyaW5nID0gdGhpcy5iYXNlVVJMICsgXCIvcG9rZW1vblwiKSB7XG4gICAgLy8gcmV0dXJuIGdldEpTT04odGhpcy5iYXNlVVJMICsgXCJwb2tlbW9uXCIpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEFQSVJlc3BvbnNlPih1cmwpO1xuICB9XG5cbiAgZ2V0UG9rZW1vbihwb2tlTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8UG9rZW1vbkRldGFpbD4odGhpcy5iYXNlVVJMICsgXCIvcG9rZW1vbi9cIiArIHBva2VOYW1lKTtcbiAgfVxufVxuIl19