// Create a JavaScript module that exports a class representing a calculator with
// methods to perform basic arithmetic operations. Import the module in another
// JavaScript file and use the calculator class to perform calculations.

// github link - https://github.com/jodhanikrunal/AWT_JavaScript-/tree/main/Practical

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }
    
    divide(a, b) {
        return a / b;
    }
}

module.exports = Calculator;