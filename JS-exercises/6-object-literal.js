function addressMaker(address) {  
    const newAddress = {  
       city: address.city,  
       state: address.state,  
       country: 'United States'  
    };  
    console.log(newAddress.city)
    console.log(newAddress.state)
    console.log(newAddress.country)
}
const Adresy = {  
    city: "Gdynia",  
    state: "Pomorskie",  
    country: "Polska " 
}; 
addressMaker(Adresy)


let str = 'Hello World';
console.log(str)
str += " 2"
console.log(str)

const num = 12345;
console.log(num)
// Wiadomo wywali błąd, bo const
//num=+2;
//console.log(num)