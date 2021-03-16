function Person() {
    // Konstruktor Person() definiuje `this` jako instancję samego siebie.
    this.age = 0;
  
    setInterval(function growUp() {
      // Bez trybu non-strict, funkcja growUp() definuje `this`
      // jako obiekt globalny, który jest inny od `this`
      // zdefiniowanego przez konstruktor Person().
      this.age++;
    }, 1000);
  }
  
  var p = new Person();

  console.log({p})