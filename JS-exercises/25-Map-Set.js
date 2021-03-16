//Map() - Mapy służą do tworzenia zbiorów z parami [klucz - wartość].
//set(key, value) - Ustawia nowy klucz z daną wartością
const map = new Map();
map.set("kolor1", "red");
map.set("kolor2", "blue");
map.set("kolor3", "yellow");

//get(key) - Zwraca wartość danego klucza
console.log(map.get("kolor1"));
//delete(key) - Usuwa dany klucz i zwraca true/false jeżeli operacja się udała
console.log(map.delete("kolor2"));
//keys() - Zwraca iterator zawierający listę kluczy z danej mapy
console.log(map.keys());
//size - słuzy do pobrania długości mapy
console.log(map.size);

//Mapy w przeciwieństwie do obiektów mogą mieć klucze dowolnego typu
map.set("1", "Kot");
map.set(1, "Pies");

console.log(map);
/*
Map(4) {
    'kolor1' => 'red',
    'kolor3' => 'yellow',
    '1' => 'Kot',
    1 => 'Pies'
  }
*/

//Jeżeli będziemy chcieli iterować po mapie, możemy wykorzystać pętlę for of
//entries() - Zwraca tablicę par klucz-wartość
//keys() - Zwraca tablicę kluczy
//values() - Zwraca tablicę wartości
for (const key of map.keys()) {
    console.log(key);
}
for (const entry of map.entries()) {
    console.log(entry);
}
/*
[ 'kolor1', 'red' ]
[ 'kolor3', 'yellow' ]
[ '1', 'Kot' ]
[ 1, 'Pies' ]
*/

//Do iterowania możemy też wykorzystać wbudowaną w mapy funkcję forEach
map.forEach((value, key, map) => {
    console.log(`
        Wartość: ${value}
        Klucz: ${key}
    `);
});
//Wartość: Pies
//Klucz: 1


//Obiekt Set jest kolekcją składającą się z unikalnych wartości, 
//gdzie każda wartość może być zarówno typu prostego jak i złożonego.
//W przeciwieństwie do mapy jest to zbiór pojedynczych wartości.

const set = new Set();
set.add(1);
set.add("text");
set.add({name: "kot"});
console.log(set);

console.log(set.has(1));
set.delete(1);
console.log(set.size);

//W przypadku Set() klucze i wartości są takie same, 
//dlatego robiąc pętle nie ważne czy użyjemy powyższych values(), keys(), entries() 
//czy po prostu zrobimy pętlę for of:

set.add("kot");
set.add("pies");
for (const val of set.values()) {
    console.log(val);
}

for (const key of set.keys()) {
    console.log(key);
}

for (const el of set) {
    console.log(el);
}

//Dzięki temu, że Set zawiera niepowtarzające się wartości, 
//możemy to wykorzystać do odsiewania duplikatów w praktycznie
//dowolnym elemencie iteracyjnym - np. w tablicy

const tab = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5];

const set2 = new Set(tab);
console.log(set2);

const uniqueTab = [...set2];
console.log(uniqueTab);

//To samo tyczy się oczywiście dynamicznie tworzonych setów

const set3 = new Set("kot");
console.log(set3)
set3.add("k");
set3.add("k");
set3.add("t");
set3.add("y");
console.log(set3);

//WeakMap() odmiana Mapy, którą od Map rozróżniają trzy rzeczy:
//Nie można po niej iterować (w przyszłości będzie można, bo już zapowiedziano odpowiednie zmiany)
//Kluczami mogą być tylko obiekty
//Jej elementy są automatycznie usuwane gdy do danego obiektu (klucza) nie będzie referencji
const { inspect } = require('util');

const ob1 = {};
const ob2 = {};

const weak = new WeakMap();
weak.set(ob1, "lorem");

console.log(weak.get(ob1)); //"lorem"
console.log(weak.has(ob1)); //true
console.log(weak.has(ob2)); //false

let ob = { name : "Karol" }

const weak2 = new WeakMap();
weak2.set(ob, "...");

ob = null;
console.log(inspect(weak2, { showHidden: true }))


//Podobnie jak dla Map istnieją WeakMap, tak dla Setów istnieją WeakSet. 
//Są to kolekcje składające się z unikalnych obiektów. 
//Podobnie do WeakMap obiekty takie będą automatycznie usuwane z WeakSet, 
//jeżeli do danego obiektu zostaną usunięte wszystkie referencje.

const wSet = new WeakSet();
const a = {};
const b = {};
let c = {}

wSet.add(a);
wSet.add(b);
wSet.add(b);
wSet.add(c);
console.log(inspect(wSet, { showHidden: true })); 

c = null;
console.log(wSet.has(c)); 