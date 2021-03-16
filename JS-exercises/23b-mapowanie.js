var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x){
    return x*2;
});
console.log("Liczby: "+numbers);
console.log("Podwojenia liczb: "+doubles);

var numbers = [1, 4 ,9];
var sqrtRoots = numbers.map(Math.sqrt);
console.log("Liczby: "+numbers);
console.log("Pierwiastki liczb: "+sqrtRoots);