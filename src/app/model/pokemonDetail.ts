
export class Sprites {

    constructor(
        private back_default: string,
        private back_female: string,
        private back_shiny: string,
        private back_shiny_female: string,
        private front_default: string,
        private front_female: string,
        private front_shiny: string,
        private front_shiny_female: string) {

    }
}

export class Types {
    constructor(public) {
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                }
            }
    }
}

export class PokemonDetail {

    constructor(public id: number, public base_experience: number, public location_area_encounters: string, public moves: { move: { name: string } }[], public sprites: Sprites, ) {

    }
}