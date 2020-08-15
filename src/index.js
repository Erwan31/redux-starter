/*
import { compose, pipe } from 'lodash/fp';
import { Map } from 'immutable';
import { produce} from 'immer';

function sayHello() {
    return function () {
        return "HEllo world";
    }
}

let fn = sayHello();
let message = fn();

setTimeout( () => console.log("Hello"), 1000);

let input = " JAvascript ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase;


const transform = pipe( trim, toLowerCase, wrap("div"));
console.log(transform( input ));


const person = { name: "John", address: {country: "USA", city: "LA"}};
const updated = {...person, name: "Bob"};
updated.address.city = "NY";
console.log(updated);

const numbers = [ 1, 2, 3];
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log('array', added);

const removed = numbers.filter( n => n !== 2 );
console.log('removed', removed);

const updated2 = numbers.map( n => (n === 2 ? 20 : n));
console.log('updated', updated2);

let book = {title: "Harry Potter"};

function publish(book){
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
}

let updated3 = publish(book);

console.log(updated3, book);
*/