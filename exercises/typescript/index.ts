console.log('Hello, TypeScript');

function add(a: number, b: number) {
    return a + b;
}

const sum = add(2, 3);

/**
 * TypeScript types
 */
// Booleans
let muted: boolean = true;
muted = false;

// Numbers
let x: number = 42
let y: number = 6
let z: number = x / y;

// Strings
let myName: string = 'Santiago';
let greet: string = `My name is ${myName}`;

// Arrays
let people: string[] = [];
people = ['Michael', 'Juan', 'Cristina'];
people.push('Gabriela');

let stringsAndNumbers: Array<string | number> = [];
stringsAndNumbers.push('Hi');
stringsAndNumbers.push(1000);

// Enums
enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue'
}

let favoriteColor: Color = Color.Blue;
console.log(`My favorite color is ${favoriteColor}`);

// Any
let idk: any = 'Joker';
idk = { type: 'Wildcard' };

// Objects
let someObject: object = { type: 'Wildcard' };

