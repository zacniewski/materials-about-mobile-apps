console.log("Line breaks")

// ---------------------------------------------------------------------
// poprawne
let func = ()  => 1;
console.log("Wywołanie funkcji ver1 -> ", func())

// poprawne
func = () =>
    1;
console.log("Wywołanie funkcji ver2 -> ", func())

// funkcje strzałkowe nie mogą mieć enter'a pomiędzy argumentami funkcji a strzałką
func = ()
           => 1;
// SyntaxError: expected expression, got '=>'

// ---------------------------------------------------------------------


