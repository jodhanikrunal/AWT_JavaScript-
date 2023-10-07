// Convert a Promise-based asynchronous function into an async/await style 
// function. For example, rewrite a function that fetches data from an API using 
// async/await. 
 
// Write a program that utilizes multiple async/await functions to fetch data from 
// different APIs sequentially and display the combined results.

// github link - https://github.com/jodhanikrunal/AWT_JavaScript-/tree/main/Practical

const fetchFromAPI = () => {
    return new Promise((resolve, reject) => {
      const success = true;
  
      setTimeout(() => {
        if (success) {
          const data = { message: "Data fetched from the API" };
          resolve(data);
        } else {
          reject(new Error("Failed to fetch data from the API"));
        }
      }, 2000);
    });
  };
  
  const fetchFromAnotherAPI = () => {
    return new Promise((resolve, reject) => {
      const success = true;
  
      setTimeout(() => {
        if (success) {
          const data = { message: "Data fetched from another API" };
          resolve(data);
        } else {
          reject(new Error("Failed to fetch data from another API"));
        }
      }, 1500);
    });
  };
  
  const fetchDataSequentially = async () => {
    try {
      const apiData = await fetchFromAPI();
      console.log("API 1 data:", apiData);
  
      const anotherApiData = await fetchFromAnotherAPI();
      console.log("API 2 data:", anotherApiData);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  fetchDataSequentially();
  
