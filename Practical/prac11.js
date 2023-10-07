// Write a program that demonstrates asynchronous behavior using a callback
// function. For example, create a function that simulates fetching data from an
// API and invokes a callback with the fetched data.

// github link - https://github.com/jodhanikrunal/AWT_JavaScript-/tree/main/Practical

function fetchDataFromAPI(callback) {
    setTimeout(() => {
      const data = { message: "Data fetched from API is as bellow",data:{Name:"Krunal Jodhnai",Id:"21CE045"} };
      callback(null, data);
    }, 2000);
  }
  
  function handleFetchedData(error, data) {
    if (error) {
      console.error("Error fetching data:", error);
    } else {
        console.log("Fetched data:", data);
        console.log("My name is:",data.data.Name);
        console.log("My Id No is:",data.data.Id);
    }
  }
  
  console.log("Fetching data from API...");
  fetchDataFromAPI(handleFetchedData);
  console.log("Fetching process initiated, waiting for response...");
  