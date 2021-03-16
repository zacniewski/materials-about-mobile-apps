var randomGen = function*(min=0, max=100, quantity=100) {
    var i=0; 
    var diff=max-min; 
    var rand = () =>Math.floor(Math.random()*diff+min); 
    while(++i<=quantity) {
        yield rand(); 
        console.log(rand.next());
    }
}
