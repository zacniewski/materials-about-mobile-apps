console.log("Function body")

// ---------------------------------------------------------------------
let func = x => x * x;
// concise body syntax, implied "return"
console.log("Funkcja strzałkowa ver1 - arg * arg  --> WYNIK: ",func(2))

func = (x, y) => { return x + y; };
// with block body, explicit "return" needed
console.log("Funkcja strzałkowa ver2 - (x + y) --> WYNIK: ",func(2,5))

// ---------------------------------------------------------------------


