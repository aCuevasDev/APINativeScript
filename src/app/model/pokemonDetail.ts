
class Sprites {

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

class Types {
    constructor(
        public slot: number,
        public type: { name: string, url: string }
    ) { }
}

class Stats {
    constructor(
        public stat: { base_stat: number, effort: number, stat: { name: string, url: string } }
    ) {

    }
}

export class PokemonDetail {

    constructor(
        public id: number,
        public species: { name: string, url: string },
        public base_experience: number,
        public location_area_encounters: string,
        public moves: { move: { name: string } }[],
        public sprites: Sprites,
        public types: Types[],
        public height: number,
        public stats: Stats[],
        public weight: number
    ) { }
}