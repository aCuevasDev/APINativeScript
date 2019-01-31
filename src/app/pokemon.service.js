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
    PokemonService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLDZDQUErRDtBQU0vRDtJQUVFLCtEQUErRDtJQUUvRCx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUU1QixZQUFPLEdBQUcsMkJBQTJCLENBQUM7SUFGTixDQUFDO0lBSXpDLG9DQUFXLEdBQVgsVUFBWSxHQUF1QztRQUF2QyxvQkFBQSxFQUFBLE1BQWMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVO1FBQ2pELDRDQUE0QztRQUM1QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFYVSxjQUFjO1FBSDFCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUswQixpQkFBVTtPQUp6QixjQUFjLENBWTFCO0lBQUQscUJBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnLi9tb2RlbC9wb2tlbW9uJztcbmltcG9ydCB7IEFQSVJlc3BvbnNlIH0gZnJvbSAnLi9tb2RlbC9hcGlSZXNwb25zZSc7XG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiXG5pbXBvcnQgeyBIdHRwQmFja2VuZCwgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQb2tlbW9uU2VydmljZSB7XG5cbiAgLy9odHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9ucy1mcmFtZXdvcmstbW9kdWxlcy9odHRwIE1JUkFSXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBwcml2YXRlIGJhc2VVUkwgPSBcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjJcIjtcblxuICBnZXRQb2tlbW9ucyh1cmw6IHN0cmluZyA9IHRoaXMuYmFzZVVSTCArIFwiL3Bva2Vtb25cIikge1xuICAgIC8vIHJldHVybiBnZXRKU09OKHRoaXMuYmFzZVVSTCArIFwicG9rZW1vblwiKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxBUElSZXNwb25zZT4odXJsKTtcbiAgfVxufVxuIl19