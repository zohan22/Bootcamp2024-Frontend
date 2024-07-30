const PI: number = Math.PI;
let age: number = 24;
let PersonName: string = 'Alexander';
let maybe: string | number = 25;
let rol: 'Admin' | 'User' = 'User';

maybe = 'something else';
rol = 'Admin';


interface Person {
    name: string;
    age: number;
    rol: 'Admin' | 'User';
}

const person: Person = {
    name: PersonName,
    age: age,
    rol: rol 
}

interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

interface PokemonMove {
    move: {
        name: string;
        url: string;
    };
}

interface PokemonSprite {
    sprite: {
        back_default: string;
        front_default: string;
    };
}

interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    types: object;
    moves: object;
    sprites: object;
}

const pikachu: Pokemon = {
    id: 25,
    name: 'pikachu',
    height:4,
    weight: 60,
    base_experience: 112, // this can be optional value
    types: [
        {
            slot: 1,
            type: {
                name:"electric",
                url:"https://pokeapi.co/api/v2/type/13/"
            },
        }
    ],
    moves: [
        {
            move: {
                name: "thunderbolt",
                url: "https://pokeapi.co/api/v2/move/85/"
            },
        },
        {
            move: {
                name: "thunder",
                url: "https://pokeapi.co/api/v2/move/87/",
            },
        },
        {
            move: {
                name: "iron-tail",
                url: "https://pokeapi.co/api/v2/move/231/"
            },
        },
    ],
    sprites: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    }
}

console.log(person);