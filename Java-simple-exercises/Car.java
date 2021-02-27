package com.company;

public class Car {

    int wheels;
    int doors;

    Car(int wheels, int doors){
        this.wheels = wheels;
        this.doors = doors;
    }

    public String describeMe(){
        String napis = "Drzwi " + this.doors + " oraz koła " + this.wheels;
        return napis;
    }
}
