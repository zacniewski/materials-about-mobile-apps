console.log("Returning object literals")

// ---------------------------------------------------------------------

let func = () => ({foo: 1}); // poprawna funkcja działajaca
//w poniższych przykładach brakuje nawiasów () obejmujacych cały obiekt.
// tj. powinno wyglądać tak:   ({pole_obiektu:"wartość tego pola"})
console.log(`func_returns`,func())

func = () =>  { foo: 1 };
// Calling func() returns undefined!

func = () =>{ foo: function() {} };
// SyntaxError: function statement requires a name

// ---------------------------------------------------------------------


