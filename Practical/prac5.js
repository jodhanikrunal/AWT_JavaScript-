// Define a class representing a vehicle with properties like make, model, and
// year. Implement methods to display the vehicle details and calculate the
// mileage.
// Create child classes like Car and Motorcycle that inherit from the Vehicle class
// and add specific properties and methods.

// github link - https://github.com/jodhanikrunal/AWT_JavaScript-/tree/main/Practical

class Vehicle {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `Year : ${this.year} \nCompany : ${this.company} \nModel : ${this.model}`;
    }

    getMileage() {
        return 'unknown';
    }
}


class Car extends Vehicle {
    constructor(company, model, year, mileage) {
        super(company, model, year);
        this.mileage = mileage;
    }

    getMileage() {
        return `Mileage : ${this.mileage}\n`;
    }
}

class Motorcycle extends Vehicle {
    constructor(company, model, year, mileage) {
        super(company, model, year);
        this.mileage = mileage;
    }

    getMileage() {
        return `Mileage : ${this.mileage}\n`;
    }
}

console.log('--> Car Details <--');
const car = new Car('Honda', 'Accord', 1998, 200000);
console.log(car.getDetails());
console.log(car.getMileage());

console.log('--> Motorcycle Details <--');
const motorcycle = new Motorcycle('Harley Davidson', 'Street 750', 2015, 10000);
console.log(motorcycle.getDetails());
console.log(motorcycle.getMileage());