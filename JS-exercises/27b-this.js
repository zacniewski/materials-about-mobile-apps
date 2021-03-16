function Person(){
    this.age = 0;
  
    setInterval(() => {
      this.age++; // własność |this| właściwie odnosi się do obiektu Person()
    }, 1000);
  }
  
  var p = new Person();
  console.log({p})