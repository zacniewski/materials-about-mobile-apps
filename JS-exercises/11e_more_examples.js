// An empty arrow function returns undefined
let empty = () => {}; // funkcja zwarca undefined

(() => 'foobar')(); // utworzenie fukncji  oraz natychmiastowe jej wykonanie
// Returns "foobar"
// (this is an Immediately Invoked Function Expression
// see 'IIFE' in glossary)

var simple = a => a > 15 ? 15 : a;
// funkcja przyjmuje arg, jeżeli arg jest >15 to zwraca 15, jesli zwraca a.
simple(16); // 15
simple(10); // 10
simple({a:4}) // zwraca objekt {a:4}

let max = (a, b) => a > b ? a : b;// nwm co tu opisac, proste i logiczne.

// Easy array filtering, mapping, ...

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) =>{ return a + b});
// inicjalizacja -> a = arr[0] = 5 oraz b = arr[1] = 6
// każdy następna iteracja  a = sumą poprzednich wart, natomiast b przybiera kolejne wart tablicy
// wynik 66

var even = arr.filter(v => v % 2 == 0);
// prosta filtracja, filter zwraca tablicę z arg która zawiera wart spełniajace warunek podany w filtrze
// wynik [6, 0, 18]

var double = arr.map(v => v * 2);
// map zwraca tablicę, która zostałą utworzona na podstawie pierwotnej tablicy,
// a każda wart z pierwotnej tab została w jakiś sposób zmieniona poprzez funkcje przekazaną do map
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
const promise = new Promise((res,rej)=>{res(1) })
promise.then(a => {
  console.log("Promise then.",a)
  return a+1
}).then(b => {
 console.log("Promise then.",b)
});

// Parameterless arrow functions that are visually easier to parse
setTimeout(
    () => { // ta funkcja wykona się jako pierwsza, ponieważ 2-gi timeout jest zagnieżdżona wewnatrz niej.
        console.log('I happen sooner');
        setTimeout( () => { // ta funkcja jest zagnieżdzona
            // deeper code
            console.log('I happen later');
        }, 1);
    },
1);