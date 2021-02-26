class Car {
    constructor(wheels, doors) {
       this.wheels = wheels;
       this.doors = doors;
    }
    describeMe() {
      console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
    }}
 
 
 const car1 = new Car(4, 2);  
 car1.describeMe(); // Doors: 2 and Wheels: 4
 