"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
    }
    SearchBarComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        alert("You are searching for " + searchBar.text);
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
        })
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEwQztBQVExQztJQUFBO0lBZUEsQ0FBQztJQVhVLHFDQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckQsQ0FBQztJQUVNLDBDQUFhLEdBQXBCLFVBQXFCLElBQUk7UUFDckIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBYlEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO09BQ1csa0JBQWtCLENBZTlCO0lBQUQseUJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3NlYXJjaC1iYXInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1zZWFyY2gtYmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyddLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhckNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgYXJlIHNlYXJjaGluZyBmb3IgXCIgKyBzZWFyY2hCYXIudGV4dCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0IGNoYW5nZWQhIE5ldyB2YWx1ZTogXCIgKyBzZWFyY2hCYXIudGV4dCk7XHJcbiAgICB9XHJcblxyXG59Il19