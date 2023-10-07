// Create a program that reads a file asynchronously using callbacks and displays 
// its contents.

// github link - https://github.com/jodhanikrunal/AWT_JavaScript-/tree/main/Practical

const fs = require('fs');

fs.readFile('Practical/tmp.txt', 'utf8', (error, data) => {
    if (error) {
        console.error("Error reading file:", error);
    } else {
        console.log("File contents:", data);
    }
});

console.log("Reading file...");
console.log("Reading process initiated, waiting for response...");
