// Zadanie 1 - Obiektowość ES6

class Vehicle {}

class Boat extends Vehicle {
    swim() {
        console.log('Swimming');
    }
}

class Car extends Vehicle {
    drive() {
        console.log('Driving');
    }
}

class Plane extends Vehicle {
    fly() {
        console.log('Flying');
    }
}

const b1 = new Boat();
b1.swim();

b1.drive();
