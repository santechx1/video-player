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

// Functions
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 5);

function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
}

const person = fullName('Agent');
console.log(person);

// Interfaces
interface Rectangle {
    width: number;
    height: number;
    color?: Color
}

let figure: Rectangle = {
    width: 4,
    height: 6,
    // color: Color.Blue,
}

function area(r: Rectangle) {
    return r.height * r.width;
}

const areaFigure = area(figure);
console.log(areaFigure);

figure.toString = function () {
    return this.color ? `A ${this.color} reactangle` : `A rectangle`;
}

console.log(figure.toString());




