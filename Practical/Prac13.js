// Write a program that uses Promises to handle asynchronous operations. For 
// example, create a function that returns a Promise to fetch data from an API and 
// resolve it with the fetched data. 
 
// Implement error handling using Promises by rejecting a Promise with an error 
// message in case of failure.

// github link - https://github.com/jodhanikrunal/AWT_JavaScript-/tree/main/Practical

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched from API is as bellow", data: { Name: "Krunal Jodhnai", Id: "21CE045" } };
            resolve(data);
        }, 2000);
    });
}

console.log("Fetching data from API...");
fetchDataFromAPI()
    .then((data) => {
        console.log("Fetched data:", data);
        console.log("My name is:", data.data.Name);
        console.log("My Id No is:", data.data.Id);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
console.log("Fetching process initiated, waiting for response...");
