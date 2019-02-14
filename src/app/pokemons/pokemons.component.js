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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFIO0FBRXJILHNEQUFvRDtBQUdwRCxzREFBeUY7QUFjekY7SUFZRSwyQkFDVSxjQUE4QixFQUM5QixNQUF3QixFQUN4QixjQUFpQztRQUZqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBVm5DLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBVyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7UUFDckQsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQUM1QixnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUNqQyxZQUFPLEdBQVksS0FBSyxDQUFDO0lBTWUsQ0FBQztJQUVoRCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx3Q0FBWSxHQUFaLFVBQWEsUUFBcUI7UUFBbEMsaUJBVUM7UUFUQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVsRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxXQUFXO1lBQ3hELEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsV0FBd0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsUUFBcUI7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNoSSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLE9BQWdCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBaEREO1FBREMsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7a0NBQ1QsaUJBQVU7c0RBQUM7SUFIakIsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQWMwQixnQ0FBYztZQUN0Qix5QkFBZ0I7WUFDUix3QkFBaUI7T0FmaEMsaUJBQWlCLENBb0Q3QjtJQUFELHdCQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tICcuLi9tb2RlbC9wb2tlbW9uJztcclxuaW1wb3J0IHsgUG9rZW1vblNlcnZpY2UgfSBmcm9tICcuLi9wb2tlbW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBUElSZXNwb25zZSB9IGZyb20gJy4uL21vZGVsL2FwaVJlc3BvbnNlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgdHlwZSBSZXF1ZXN0VHlwZSA9IFwibmV4dFwiIHwgXCJwcmV2aW91c1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICducy1wb2tlbW9ucycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Bva2Vtb25zLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb2tlbW9ucy5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBva2Vtb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZChcIm15U2Nyb2xsVmlld1wiKVxyXG4gIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBwb2tlbW9uczogUG9rZW1vbltdID0gW107XHJcbiAgcHJpdmF0ZSBjb3VudFBva2Vtb246IG51bWJlciA9IDE7IC8vdG8gZ2V0IHRoZSBpZCBvZiB0aGUgcGttblxyXG4gIHByaXZhdGUgbmV4dFVybDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgcHJldmlvdXNVcmw6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgc2Nyb2xsVmlldzogU2Nyb2xsVmlldztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHBva2Vtb25TZXJ2aWNlOiBQb2tlbW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2Nyb2xsVmlldyA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5sb2FkUG9rZW1vbnMoXCJuZXh0XCIpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFBva2Vtb25zKHJxc3RUeXBlOiBSZXF1ZXN0VHlwZSkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIGxldCB1cmwgPSAocnFzdFR5cGUgPT09IFwibmV4dFwiKSA/IHRoaXMubmV4dFVybCA6IHRoaXMucHJldmlvdXNVcmw7XHJcblxyXG4gICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRQb2tlbW9ucyh1cmwpLnN1YnNjcmliZShhcGlSZXNwb25zZSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0Q291bnQocnFzdFR5cGUpO1xyXG4gICAgICB0aGlzLnNldERhdGEoYXBpUmVzcG9uc2UpO1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVmVydGljYWxPZmZzZXQoMCwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXREYXRhKGFwaVJlc3BvbnNlOiBBUElSZXNwb25zZSkge1xyXG4gICAgdGhpcy5wb2tlbW9ucyA9IGFwaVJlc3BvbnNlLnJlc3VsdHM7XHJcbiAgICB0aGlzLm5leHRVcmwgPSBhcGlSZXNwb25zZS5uZXh0O1xyXG4gICAgdGhpcy5wcmV2aW91c1VybCA9IGFwaVJlc3BvbnNlLnByZXZpb3VzO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIGNvbnNvbGUubG9nKFwibGVuZ3RoOiBcIiArIHRoaXMucG9rZW1vbnMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHNldENvdW50KHJxc3RUeXBlOiBSZXF1ZXN0VHlwZSkge1xyXG4gICAgdGhpcy5jb3VudFBva2Vtb24gPSAocnFzdFR5cGUgPT09IFwibmV4dFwiKSA/IHRoaXMuY291bnRQb2tlbW9uICsgdGhpcy5wb2tlbW9ucy5sZW5ndGggOiB0aGlzLmNvdW50UG9rZW1vbiAtIHRoaXMucG9rZW1vbnMubGVuZ3RoO1xyXG4gICAgaWYgKHRoaXMuY291bnRQb2tlbW9uIDwgMSlcclxuICAgICAgdGhpcy5jb3VudFBva2Vtb24gPSAxO1xyXG4gIH1cclxuXHJcbiAgc2VlRGV0YWlsKHBva2Vtb246IFBva2Vtb24pIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGFwOiBcIiArIHBva2Vtb24ubmFtZSk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwb2tlbW9uL1wiICsgcG9rZW1vbi5uYW1lXSlcclxuICB9XHJcbn1cclxuIl19