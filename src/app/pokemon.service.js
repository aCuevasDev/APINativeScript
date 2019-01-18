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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQVEvRDtJQUlFLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjVCLFlBQU8sR0FBQyw0QkFBNEIsQ0FBQztJQUVMLENBQUM7SUFFekMsb0NBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWMsSUFBSSxDQUFDLE9BQU8sR0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBUlUsY0FBYztRQUgxQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FLMEIsaUJBQVU7T0FKekIsY0FBYyxDQVMxQjtJQUFELHFCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJy4vbW9kZWwvcG9rZW1vbic7XG5pbXBvcnQgeyBBUElSZXNwb25zZSB9IGZyb20gJy4vbW9kZWwvYXBpUmVzcG9uc2UnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBva2Vtb25TZXJ2aWNlIHtcblxuICBwcml2YXRlIGJhc2VVUkw9XCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL1wiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0UG9rZW1vbnMoKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxBUElSZXNwb25zZT4odGhpcy5iYXNlVVJMK1wiL3Bva2Vtb25cIik7XG4gIH1cbn1cbiJdfQ==