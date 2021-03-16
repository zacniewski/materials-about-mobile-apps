function makeUpperCase(v)
{
    return v.toUpperCase();
}

function makeLowerCase(v)
{
    return v.toLowerCase();
}

var strings = ["hello", "Array", "WORLD", "WiTaJ SwIeCiE"];

var uppers = strings.map(makeUpperCase);

var lowers = strings.map(makeLowerCase);

console.log("Początkowa tablica string'ow:   " + strings);
console.log("Wszystkie wielkie literki:      " + uppers);
console.log("Wszystkie małe literki:         " + lowers);