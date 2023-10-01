// Write a program that demonstrates asynchronous behavior using a callback
// function. For example, create a function that simulates fetching data from an
// API and invokes a callback with the fetched data.

function getData(callback) {
    setTimeout(() => {
        callback('Data received from API');
    }, 2000);
}

getData((data) => {
    console.log(data);
});
