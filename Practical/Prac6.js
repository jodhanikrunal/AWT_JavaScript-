// Use the prototype property to add a new method to an existing object
// constructor, such as Array or String.
Array.prototype.print = function () {
    console.log(this);
}

const arr = [1, 2, 3];

arr.print();

String.prototype.print = function () {
    console.log(this);
}

const str = "Krunal Jodhani";

str.print();