"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
        this.baseURL = "https://pokeapi.co/api/v2/";
    }
    PokemonService.prototype.getPokemons = function () {
        return this.http.get(this.baseURL + "/pokemon");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQU8vRDtJQUlFLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjVCLFlBQU8sR0FBQyw0QkFBNEIsQ0FBQztJQUVMLENBQUM7SUFFekMsb0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXFCLElBQUksQ0FBQyxPQUFPLEdBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQVJVLGNBQWM7UUFIMUIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBSzBCLGlCQUFVO09BSnpCLGNBQWMsQ0FTMUI7SUFBRCxxQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tICcuL21vZGVsL3Bva2Vtb24nO1xuaW1wb3J0IHsgQVBJUmVzcG9uc2VTZXJ2aWNlIH0gZnJvbSAnLi9hcGlyZXNwb25zZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUG9rZW1vblNlcnZpY2Uge1xuXG4gIHByaXZhdGUgYmFzZVVSTD1cImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBnZXRQb2tlbW9ucygpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEFQSVJlc3BvbnNlU2VydmljZT4odGhpcy5iYXNlVVJMK1wiL3Bva2Vtb25cIik7XG4gIH1cbn1cbiJdfQ==