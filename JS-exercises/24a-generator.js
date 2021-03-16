function* generator() {
    yield "kot";
    yield "pies";
    yield "świnka";
}

const gen = generator();

console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());