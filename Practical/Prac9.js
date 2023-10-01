// Implement dynamic imports using the import() function to load modules
// asynchronously based on certain conditions.

import('./prac5.js')
    .then((module) => {
        const car = new module.Car('Honda', 'Accord', 1998, 200000);
        console.log(car.getDetails());
        console.log(car.getMileage());
    });

import('./prac5.js')
    .then((module) => {
        const motorcycle = new module.Motorcycle('Harley Davidson', 'Street 750', 2015, 10000);
        console.log(motorcycle.getDetails());
        console.log(motorcycle.getMileage());
    });
    