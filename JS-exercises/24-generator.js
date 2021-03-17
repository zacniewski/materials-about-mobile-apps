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


// generacja w pętli
console.log("Inny sposób generacji:");
var numbers = randomGen(50, 100, 10);
for(var num of numbers) 
    console.log(num);

