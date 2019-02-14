"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pokemon_service_1 = require("../pokemon.service");
var router_1 = require("nativescript-angular/router");
var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(pokemonService, router) {
        this.pokemonService = pokemonService;
        this.router = router;
    }
    SearchBarComponent.prototype.onSubmit = function (args) {
        var _this = this;
        var searchBar = args.object;
        alert("You are searching for " + searchBar.text);
        this.pokemonService.getPokemon(searchBar.text).subscribe(function (pokemon) {
            _this.pkmn = pokemon;
            if (_this.pkmn) {
                _this.router.navigate(["pokemon/" + _this.pkmn.id]);
            }
        });
    };
    SearchBarComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    };
    SearchBarComponent = __decorate([
        core_1.Component({
            selector: 'ns-search-bar',
            templateUrl: './search-bar.component.html',
            styleUrls: ['./search-bar.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [pokemon_service_1.PokemonService, router_1.RouterExtensions])
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEwQztBQUMxQyxzREFBb0Q7QUFFcEQsc0RBQStEO0FBUy9EO0lBRUksNEJBQW9CLGNBQThCLEVBQVUsTUFBd0I7UUFBaEUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBSSxDQUFDO0lBSWxGLHFDQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUFwQixpQkFVQztRQVRHLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUM1RCxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQTtZQUNuQixJQUFJLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JEO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU0sMENBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFyQlEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQUdzQyxnQ0FBYyxFQUFrQix5QkFBZ0I7T0FGM0Usa0JBQWtCLENBdUI5QjtJQUFELHlCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBva2Vtb25TZXJ2aWNlIH0gZnJvbSAnLi4vcG9rZW1vbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9rZW1vbkRldGFpbCB9IGZyb20gJy4uL21vZGVsL3Bva2Vtb25EZXRhaWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgcm91dGVyTmdQcm9iZVRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy9yb3V0ZXJfbW9kdWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1zZWFyY2gtYmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyddLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhckNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwb2tlbW9uU2VydmljZTogUG9rZW1vblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIHBrbW46IFBva2Vtb25EZXRhaWw7XHJcblxyXG4gICAgcHVibGljIG9uU3VibWl0KGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBhbGVydChcIllvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgICAgICB0aGlzLnBva2Vtb25TZXJ2aWNlLmdldFBva2Vtb24oc2VhcmNoQmFyLnRleHQpLnN1YnNjcmliZShwb2tlbW9uID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wa21uID0gcG9rZW1vblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wa21uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwb2tlbW9uL1wiICsgdGhpcy5wa21uLmlkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uVGV4dENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoQmFyIHRleHQgY2hhbmdlZCEgTmV3IHZhbHVlOiBcIiArIHNlYXJjaEJhci50ZXh0KTtcclxuICAgIH1cclxuXHJcbn0iXX0=