"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sprites = /** @class */ (function () {
    function Sprites(back_default, back_female, back_shiny, back_shiny_female, front_default, front_female, front_shiny, front_shiny_female) {
        this.back_default = back_default;
        this.back_female = back_female;
        this.back_shiny = back_shiny;
        this.back_shiny_female = back_shiny_female;
        this.front_default = front_default;
        this.front_female = front_female;
        this.front_shiny = front_shiny;
        this.front_shiny_female = front_shiny_female;
    }
    return Sprites;
}());
var Types = /** @class */ (function () {
    function Types(slot, type) {
        this.slot = slot;
        this.type = type;
    }
    return Types;
}());
var Stats = /** @class */ (function () {
    function Stats(stat) {
        this.stat = stat;
    }
    return Stats;
}());
var PokemonDetail = /** @class */ (function () {
    function PokemonDetail(id, species, base_experience, location_area_encounters, moves, sprites, types, height, stats, weight) {
        this.id = id;
        this.species = species;
        this.base_experience = base_experience;
        this.location_area_encounters = location_area_encounters;
        this.moves = moves;
        this.sprites = sprites;
        this.types = types;
        this.height = height;
        this.stats = stats;
        this.weight = weight;
    }
    return PokemonDetail;
}());
exports.PokemonDetail = PokemonDetail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbkRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBva2Vtb25EZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtJQUVJLGlCQUNZLFlBQW9CLEVBQ3BCLFdBQW1CLEVBQ25CLFVBQWtCLEVBQ2xCLGlCQUF5QixFQUN6QixhQUFxQixFQUNyQixZQUFvQixFQUNwQixXQUFtQixFQUNuQixrQkFBMEI7UUFQMUIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVE7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDckIsaUJBQVksR0FBWixZQUFZLENBQVE7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFRO0lBRXRDLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFFRDtJQUNJLGVBQ1csSUFBWSxFQUNaLElBQW1DO1FBRG5DLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixTQUFJLEdBQUosSUFBSSxDQUErQjtJQUMxQyxDQUFDO0lBQ1QsWUFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBRUQ7SUFDSSxlQUNXLElBQWdGO1FBQWhGLFNBQUksR0FBSixJQUFJLENBQTRFO0lBRzNGLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFFRDtJQUVJLHVCQUNXLEVBQVUsRUFDVixPQUFzQyxFQUN0QyxlQUF1QixFQUN2Qix3QkFBZ0MsRUFDaEMsS0FBbUMsRUFDbkMsT0FBZ0IsRUFDaEIsS0FBWSxFQUNaLE1BQWMsRUFDZCxLQUFjLEVBQ2QsTUFBYztRQVRkLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixZQUFPLEdBQVAsT0FBTyxDQUErQjtRQUN0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBUTtRQUN2Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQVE7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBOEI7UUFDbkMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFDVCxvQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2xhc3MgU3ByaXRlcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBiYWNrX2RlZmF1bHQ6IHN0cmluZyxcclxuICAgICAgICBwcml2YXRlIGJhY2tfZmVtYWxlOiBzdHJpbmcsXHJcbiAgICAgICAgcHJpdmF0ZSBiYWNrX3NoaW55OiBzdHJpbmcsXHJcbiAgICAgICAgcHJpdmF0ZSBiYWNrX3NoaW55X2ZlbWFsZTogc3RyaW5nLFxyXG4gICAgICAgIHByaXZhdGUgZnJvbnRfZGVmYXVsdDogc3RyaW5nLFxyXG4gICAgICAgIHByaXZhdGUgZnJvbnRfZmVtYWxlOiBzdHJpbmcsXHJcbiAgICAgICAgcHJpdmF0ZSBmcm9udF9zaGlueTogc3RyaW5nLFxyXG4gICAgICAgIHByaXZhdGUgZnJvbnRfc2hpbnlfZmVtYWxlOiBzdHJpbmcpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFR5cGVzIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBzbG90OiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHR5cGU6IHsgbmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZyB9XHJcbiAgICApIHsgfVxyXG59XHJcblxyXG5jbGFzcyBTdGF0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgc3RhdDogeyBiYXNlX3N0YXQ6IG51bWJlciwgZWZmb3J0OiBudW1iZXIsIHN0YXQ6IHsgbmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZyB9IH1cclxuICAgICkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBva2Vtb25EZXRhaWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBzcGVjaWVzOiB7IG5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcgfSxcclxuICAgICAgICBwdWJsaWMgYmFzZV9leHBlcmllbmNlOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGxvY2F0aW9uX2FyZWFfZW5jb3VudGVyczogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBtb3ZlczogeyBtb3ZlOiB7IG5hbWU6IHN0cmluZyB9IH1bXSxcclxuICAgICAgICBwdWJsaWMgc3ByaXRlczogU3ByaXRlcyxcclxuICAgICAgICBwdWJsaWMgdHlwZXM6IFR5cGVzLFxyXG4gICAgICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc3RhdHM6IFN0YXRzW10sXHJcbiAgICAgICAgcHVibGljIHdlaWdodDogbnVtYmVyXHJcbiAgICApIHsgfVxyXG59Il19