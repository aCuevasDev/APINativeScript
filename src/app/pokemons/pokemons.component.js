"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pokemon_service_1 = require("../pokemon.service");
var router_1 = require("nativescript-angular/router");
var PokemonsComponent = /** @class */ (function () {
    function PokemonsComponent(pokemonService, router, changeDetector) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.changeDetector = changeDetector;
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
        this.changeDetector.markForCheck();
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
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [pokemon_service_1.PokemonService,
            router_1.RouterExtensions,
            core_1.ChangeDetectorRef])
    ], PokemonsComponent);
    return PokemonsComponent;
}());
exports.PokemonsComponent = PokemonsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFIO0FBRXJILHNEQUFvRDtBQUdwRCxzREFBeUY7QUFZekY7SUFZRSwyQkFDVSxjQUE4QixFQUM5QixNQUF3QixFQUN4QixjQUFpQztRQUZqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBVm5DLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBVyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7UUFDckQsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQUM1QixnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUNqQyxZQUFPLEdBQVksS0FBSyxDQUFDO0lBTWUsQ0FBQztJQUVoRCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsUUFBcUI7UUFBbEMsaUJBVUM7UUFUQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVsRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ3hELEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsV0FBd0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsUUFBcUI7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNoSSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLE9BQWdCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBaEREO1FBREMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQ1QsaUJBQVU7c0RBQUM7SUFIakIsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQWMwQixnQ0FBYztZQUN0Qix5QkFBZ0I7WUFDUix3QkFBaUI7T0FmaEMsaUJBQWlCLENBb0Q3QjtJQUFELHdCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tICcuLi9tb2RlbC9wb2tlbW9uJztcclxuaW1wb3J0IHsgUG9rZW1vblNlcnZpY2UgfSBmcm9tICcuLi9wb2tlbW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBUElSZXNwb25zZSB9IGZyb20gJy4uL21vZGVsL2FwaVJlc3BvbnNlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5cclxuZXhwb3J0IHR5cGUgUmVxdWVzdFR5cGUgPSBcIm5leHRcIiB8IFwicHJldmlvdXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnMtcG9rZW1vbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb2tlbW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcG9rZW1vbnMuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb2tlbW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJteVNjcm9sbFZpZXdcIilcclxuICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgcG9rZW1vbnM6IFBva2Vtb25bXSA9IFtdO1xyXG4gIHByaXZhdGUgY291bnRQb2tlbW9uOiBudW1iZXIgPSAxOyAvL3RvIGdldCB0aGUgaWQgb2YgdGhlIHBrbW5cclxuICBwcml2YXRlIG5leHRVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIHByZXZpb3VzVXJsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIHNjcm9sbFZpZXc6IFNjcm9sbFZpZXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBwb2tlbW9uU2VydmljZTogUG9rZW1vblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNjcm9sbFZpZXcgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMubG9hZFBva2Vtb25zKFwibmV4dFwiKTtcclxuICB9XHJcblxyXG4gIGxvYWRQb2tlbW9ucyhycXN0VHlwZTogUmVxdWVzdFR5cGUpIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBsZXQgdXJsID0gKHJxc3RUeXBlID09PSBcIm5leHRcIikgPyB0aGlzLm5leHRVcmwgOiB0aGlzLnByZXZpb3VzVXJsO1xyXG5cclxuICAgIHRoaXMucG9rZW1vblNlcnZpY2UuZ2V0UG9rZW1vbnModXJsKS5zdWJzY3JpYmUoYXBpUmVzcG9uc2UgPT4ge1xyXG4gICAgICB0aGlzLnNldENvdW50KHJxc3RUeXBlKTtcclxuICAgICAgdGhpcy5zZXREYXRhKGFwaVJlc3BvbnNlKTtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1ZlcnRpY2FsT2Zmc2V0KDAsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YShhcGlSZXNwb25zZTogQVBJUmVzcG9uc2UpIHtcclxuICAgIHRoaXMucG9rZW1vbnMgPSBhcGlSZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgdGhpcy5uZXh0VXJsID0gYXBpUmVzcG9uc2UubmV4dDtcclxuICAgIHRoaXMucHJldmlvdXNVcmwgPSBhcGlSZXNwb25zZS5wcmV2aW91cztcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImxlbmd0aDogXCIgKyB0aGlzLnBva2Vtb25zLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBzZXRDb3VudChycXN0VHlwZTogUmVxdWVzdFR5cGUpIHtcclxuICAgIHRoaXMuY291bnRQb2tlbW9uID0gKHJxc3RUeXBlID09PSBcIm5leHRcIikgPyB0aGlzLmNvdW50UG9rZW1vbiArIHRoaXMucG9rZW1vbnMubGVuZ3RoIDogdGhpcy5jb3VudFBva2Vtb24gLSB0aGlzLnBva2Vtb25zLmxlbmd0aDtcclxuICAgIGlmICh0aGlzLmNvdW50UG9rZW1vbiA8IDEpXHJcbiAgICAgIHRoaXMuY291bnRQb2tlbW9uID0gMTtcclxuICB9XHJcblxyXG4gIHNlZURldGFpbChwb2tlbW9uOiBQb2tlbW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRhcDogXCIgKyBwb2tlbW9uLm5hbWUpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicG9rZW1vbi9cIiArIHBva2Vtb24ubmFtZV0pXHJcbiAgfVxyXG59XHJcbiJdfQ==