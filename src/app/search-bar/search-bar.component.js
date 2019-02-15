"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pokemon_service_1 = require("../pokemon.service");
var router_1 = require("nativescript-angular/router");
var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(pokemonService, router, changeDetector) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.changeDetector = changeDetector;
        this.searchedPoke = [];
        this.allPokemons = [];
        console.log("constructor");
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.getAllPokemons().subscribe(function (apiResponse) {
            _this.allPokemons = apiResponse.results;
            console.log("AllPokeComplete: " + _this.allPokemons.length);
        });
    };
    SearchBarComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        // alert("You are searching for " + searchBar.text);
        // this.pokemonService.getPokemon(searchBar.text).subscribe(pokemon => {
        //     this.pkmn = pokemon
        //     if (this.pkmn) {
        //         this.router.navigate(["pokemon/" + this.pkmn.id]);
        //     }
        // });
        console.log("Searching...........");
        // this.pokemonService.getAllPokemons().subscribe(apiResponse => {
        //     this.allPokemons = apiResponse.results.filter(pkmn => pkmn.name.includes(searchBar.text.toLowerCase()));
        //     console.log("searchComplete: " + this.allPokemons.length);
        //     this.changeDetector.markForCheck();
        // })
    };
    SearchBarComponent.prototype.onTextChanged = function (args) {
        var _this = this;
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
        if (!searchBar.text) {
            this.searchedPoke = undefined;
            this.changeDetector.markForCheck();
        }
        else {
            this.pokemonService.getAllPokemons().subscribe(function (apiResponse) {
                _this.searchedPoke = apiResponse.results.filter(function (pkmn) { return pkmn.name.includes(searchBar.text.toLowerCase()); });
                console.log("searchComplete: " + _this.allPokemons.length);
                _this.changeDetector.markForCheck();
            });
        }
    };
    SearchBarComponent.prototype.searchPoke = function (searchBar) {
        this.searchedPoke = this.allPokemons.filter(function (pkmn) { return pkmn.name.includes(searchBar.text.toLowerCase()); });
        console.log("searchedPoke: " + this.searchedPoke.length);
        this.changeDetector.markForCheck();
    };
    SearchBarComponent.prototype.onTap = function (pokemon) {
        console.log("tap: " + pokemon.name);
        this.router.navigate(["pokemon/" + pokemon.name]);
    };
    SearchBarComponent = __decorate([
        core_1.Component({
            selector: 'ns-search-bar',
            templateUrl: './search-bar.component.html',
            styleUrls: ['./search-bar.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [pokemon_service_1.PokemonService,
            router_1.RouterExtensions,
            core_1.ChangeDetectorRef])
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUE4RjtBQUM5RixzREFBb0Q7QUFFcEQsc0RBQStEO0FBWS9EO0lBU0ksNEJBQ1ksY0FBOEIsRUFDOUIsTUFBd0IsRUFDeEIsY0FBaUM7UUFGakMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUt0QyxpQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUM3QixnQkFBVyxHQUFjLEVBQUUsQ0FBQztRQUovQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRS9CLENBQUM7SUFkRCxxQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDdEQsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFjTSxxQ0FBUSxHQUFmLFVBQWdCLElBQUk7UUFDaEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxvREFBb0Q7UUFFcEQsd0VBQXdFO1FBQ3hFLDBCQUEwQjtRQUMxQix1QkFBdUI7UUFDdkIsNkRBQTZEO1FBQzdELFFBQVE7UUFDUixNQUFNO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLGtFQUFrRTtRQUNsRSwrR0FBK0c7UUFDL0csaUVBQWlFO1FBQ2pFLDBDQUEwQztRQUMxQyxLQUFLO0lBRVQsQ0FBQztJQUVNLDBDQUFhLEdBQXBCLFVBQXFCLElBQUk7UUFBekIsaUJBZUM7UUFkRyxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdEM7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsV0FBVztnQkFDdEQsS0FBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO2dCQUN6RyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUE7U0FDTDtJQUVMLENBQUM7SUFFTSx1Q0FBVSxHQUFqQixVQUFrQixTQUFvQjtRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7UUFDdEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLGtDQUFLLEdBQVosVUFBYSxPQUFnQjtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDckQsQ0FBQztJQW5FUSxrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDekMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07WUFDL0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBVzhCLGdDQUFjO1lBQ3RCLHlCQUFnQjtZQUNSLHdCQUFpQjtPQVpwQyxrQkFBa0IsQ0FxRTlCO0lBQUQseUJBQUM7Q0FBQSxBQXJFRCxJQXFFQztBQXJFWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBva2Vtb25TZXJ2aWNlIH0gZnJvbSAnLi4vcG9rZW1vbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUG9rZW1vbkRldGFpbCB9IGZyb20gJy4uL21vZGVsL3Bva2Vtb25EZXRhaWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgcm91dGVyTmdQcm9iZVRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyL3NyYy9yb3V0ZXJfbW9kdWxlJztcclxuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJy4uL21vZGVsL3Bva2Vtb24nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zLXNlYXJjaC1iYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWJhci5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucG9rZW1vblNlcnZpY2UuZ2V0QWxsUG9rZW1vbnMoKS5zdWJzY3JpYmUoYXBpUmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFsbFBva2Vtb25zID0gYXBpUmVzcG9uc2UucmVzdWx0cztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbGxQb2tlQ29tcGxldGU6IFwiICsgdGhpcy5hbGxQb2tlbW9ucy5sZW5ndGgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBwb2tlbW9uU2VydmljZTogUG9rZW1vblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICAgICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29uc3RydWN0b3JcIik7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHNlYXJjaGVkUG9rZTogUG9rZW1vbltdID0gW107XHJcbiAgICBwdWJsaWMgYWxsUG9rZW1vbnM6IFBva2Vtb25bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBwa21uOiBQb2tlbW9uRGV0YWlsO1xyXG5cclxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgLy8gYWxlcnQoXCJZb3UgYXJlIHNlYXJjaGluZyBmb3IgXCIgKyBzZWFyY2hCYXIudGV4dCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMucG9rZW1vblNlcnZpY2UuZ2V0UG9rZW1vbihzZWFyY2hCYXIudGV4dCkuc3Vic2NyaWJlKHBva2Vtb24gPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBrbW4gPSBwb2tlbW9uXHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnBrbW4pIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBva2Vtb24vXCIgKyB0aGlzLnBrbW4uaWRdKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VhcmNoaW5nLi4uLi4uLi4uLi5cIik7XHJcbiAgICAgICAgLy8gdGhpcy5wb2tlbW9uU2VydmljZS5nZXRBbGxQb2tlbW9ucygpLnN1YnNjcmliZShhcGlSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYWxsUG9rZW1vbnMgPSBhcGlSZXNwb25zZS5yZXN1bHRzLmZpbHRlcihwa21uID0+IHBrbW4ubmFtZS5pbmNsdWRlcyhzZWFyY2hCYXIudGV4dC50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwic2VhcmNoQ29tcGxldGU6IFwiICsgdGhpcy5hbGxQb2tlbW9ucy5sZW5ndGgpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0IGNoYW5nZWQhIE5ldyB2YWx1ZTogXCIgKyBzZWFyY2hCYXIudGV4dCk7XHJcblxyXG4gICAgICAgIGlmICghc2VhcmNoQmFyLnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hlZFBva2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb2tlbW9uU2VydmljZS5nZXRBbGxQb2tlbW9ucygpLnN1YnNjcmliZShhcGlSZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaGVkUG9rZSA9IGFwaVJlc3BvbnNlLnJlc3VsdHMuZmlsdGVyKHBrbW4gPT4gcGttbi5uYW1lLmluY2x1ZGVzKHNlYXJjaEJhci50ZXh0LnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoQ29tcGxldGU6IFwiICsgdGhpcy5hbGxQb2tlbW9ucy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWFyY2hQb2tlKHNlYXJjaEJhcjogU2VhcmNoQmFyKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hlZFBva2UgPSB0aGlzLmFsbFBva2Vtb25zLmZpbHRlcihwa21uID0+IHBrbW4ubmFtZS5pbmNsdWRlcyhzZWFyY2hCYXIudGV4dC50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hlZFBva2U6IFwiICsgdGhpcy5zZWFyY2hlZFBva2UubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRhcChwb2tlbW9uOiBQb2tlbW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YXA6IFwiICsgcG9rZW1vbi5uYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicG9rZW1vbi9cIiArIHBva2Vtb24ubmFtZV0pXHJcbiAgICB9XHJcblxyXG59Il19