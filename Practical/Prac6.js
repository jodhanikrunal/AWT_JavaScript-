// Use the prototype property to add a new method to an existing object
// constructor, such as Array or String.

// github link - https://github.com/jodhanikrunal/AWT_JavaScript-/tree/main/Practical


console.log("Create Array using Prototype : ");
Array.prototype.print = function () {
    console.log(this);
}

const arr = [1, 2, 3];

arr.print();

console.log("Create String using Prototype : ");

String.prototype.print = function () {
    console.log(this);
}

const str = "Krunal Jodhani";

str.print();