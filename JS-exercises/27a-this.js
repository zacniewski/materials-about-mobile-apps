function Person() {
    var that = this;
    that.age = 0;
  
    setInterval(function growUp() {
      // The callback refers to the `that` variable of which
      // the value is the expected object.
      that.age++;
    }, 500);
    console.log(that.age)
  }
let p = new Person();
console.log({p})