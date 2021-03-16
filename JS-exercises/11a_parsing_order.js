console.log("Parsing order")

// ---------------------------------------------------------------------

let callback;

callback = callback || function() {}; // ok

// w tej definicji brakuje ponownie nawiasów (), które obejmowały by CAŁĄ funkcję.
callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments

callback = callback || (() => {});    // ok

// ---------------------------------------------------------------------
