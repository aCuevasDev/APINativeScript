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
        this.scrollView = this.element.nativeElement;
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
            _this.scrollView.scrollToVerticalOffset(0, false);
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
    __decorate([
        core_1.ViewChild("myScrollView"),
        __metadata("design:type", core_1.ElementRef)
    ], PokemonsComponent.prototype, "element", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBRXpFLHNEQUFvRDtBQUdwRCxzREFBeUY7QUFhekY7SUFZRSwyQkFBb0IsY0FBOEIsRUFBVSxNQUF3QjtRQUFoRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVA1RSxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsMkJBQTJCO1FBQ3JELFlBQU8sR0FBVyxTQUFTLENBQUM7UUFDNUIsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDakMsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUd3RCxDQUFDO0lBRXpGLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxRQUFxQjtRQUFsQyxpQkFVQztRQVRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRWxFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDeEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxXQUF3QjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsUUFBcUI7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNoSSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBR0QscUNBQVMsR0FBVCxVQUFVLE9BQWdCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBOUNEO1FBREMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQ1QsaUJBQVU7c0RBQUM7SUFIakIsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQWFvQyxnQ0FBYyxFQUFrQix5QkFBZ0I7T0FaekUsaUJBQWlCLENBa0Q3QjtJQUFELHdCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSAnLi4vbW9kZWwvcG9rZW1vbic7XHJcbmltcG9ydCB7IFBva2Vtb25TZXJ2aWNlIH0gZnJvbSAnLi4vcG9rZW1vbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQVBJUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbC9hcGlSZXNwb25zZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3JztcclxuXHJcblxyXG5cclxuZXhwb3J0IHR5cGUgUmVxdWVzdFR5cGUgPSBcIm5leHRcIiB8IFwicHJldmlvdXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnMtcG9rZW1vbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb2tlbW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcG9rZW1vbnMuY29tcG9uZW50LmNzcyddLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb2tlbW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJteVNjcm9sbFZpZXdcIilcclxuICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgcG9rZW1vbnM6IFBva2Vtb25bXSA9IFtdO1xyXG4gIHByaXZhdGUgY291bnRQb2tlbW9uOiBudW1iZXIgPSAxOyAvL3RvIGdldCB0aGUgaWQgb2YgdGhlIHBrbW5cclxuICBwcml2YXRlIG5leHRVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIHByZXZpb3VzVXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHNjcm9sbFZpZXc6IFNjcm9sbFZpZXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcG9rZW1vblNlcnZpY2U6IFBva2Vtb25TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zY3JvbGxWaWV3ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmxvYWRQb2tlbW9ucyhcIm5leHRcIik7XHJcbiAgfVxyXG5cclxuICBsb2FkUG9rZW1vbnMocnFzdFR5cGU6IFJlcXVlc3RUeXBlKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgbGV0IHVybCA9IChycXN0VHlwZSA9PT0gXCJuZXh0XCIpID8gdGhpcy5uZXh0VXJsIDogdGhpcy5wcmV2aW91c1VybDtcclxuXHJcbiAgICB0aGlzLnBva2Vtb25TZXJ2aWNlLmdldFBva2Vtb25zKHVybCkuc3Vic2NyaWJlKGFwaVJlc3BvbnNlID0+IHtcclxuICAgICAgdGhpcy5zZXRDb3VudChycXN0VHlwZSk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YShhcGlSZXNwb25zZSk7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9WZXJ0aWNhbE9mZnNldCgwLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldERhdGEoYXBpUmVzcG9uc2U6IEFQSVJlc3BvbnNlKSB7XHJcbiAgICB0aGlzLnBva2Vtb25zID0gYXBpUmVzcG9uc2UucmVzdWx0cztcclxuICAgIHRoaXMubmV4dFVybCA9IGFwaVJlc3BvbnNlLm5leHQ7XHJcbiAgICB0aGlzLnByZXZpb3VzVXJsID0gYXBpUmVzcG9uc2UucHJldmlvdXM7XHJcbiAgICBjb25zb2xlLmxvZyhcImxlbmd0aDogXCIgKyB0aGlzLnBva2Vtb25zLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb3VudChycXN0VHlwZTogUmVxdWVzdFR5cGUpIHtcclxuICAgIHRoaXMuY291bnRQb2tlbW9uID0gKHJxc3RUeXBlID09PSBcIm5leHRcIikgPyB0aGlzLmNvdW50UG9rZW1vbiArIHRoaXMucG9rZW1vbnMubGVuZ3RoIDogdGhpcy5jb3VudFBva2Vtb24gLSB0aGlzLnBva2Vtb25zLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLmNvdW50UG9rZW1vbiA8IDEpXHJcbiAgICAgIHRoaXMuY291bnRQb2tlbW9uID0gMTtcclxuICB9XHJcblxyXG5cclxuICBzZWVEZXRhaWwocG9rZW1vbjogUG9rZW1vbikge1xyXG4gICAgY29uc29sZS5sb2coXCJ0YXA6IFwiICsgcG9rZW1vbi5uYW1lKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwb2tlbW9uL1wiICsgcG9rZW1vbi5uYW1lXSlcclxuICB9XHJcbn1cclxuIl19