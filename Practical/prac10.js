// Create an iterator that generates an infinite sequence of numbers and a generator
// that yields a sequence of even numbers. Use the iterator and generator in
// different scenarios.

// github link - https://github.com/jodhanikrunal/AWT_JavaScript-/tree/main/Practical

// Iterator
function* infiniteSequence() {
    var i = 0;
    while (true) {
        yield i++;
    }
}
console.log("Iterator : ");
const iterator = infiniteSequence();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Generator
function* evenNumbersGenerator() {
    let num = 0;
    while (true) {
        yield num;
        num += 2;
    }
}

console.log("Generator : ");
const generator = evenNumbersGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
