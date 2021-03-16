function* randomGen(min=0, max=100, quantity=100) {
    var i=0; 
    var diff=max-min; 
    var rand = () =>Math.floor(Math.random()*diff+min); 
    while(++i<=quantity) 
        yield rand(); 
}

const rg = randomGen();

// 5 losowych wartości
console.log(rg.next());
console.log(rg.next());
console.log(rg.next().value);
console.log(rg.next().done);
console.log(rg.next());
