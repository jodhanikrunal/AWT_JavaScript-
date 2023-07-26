const PI = 3.14;
const addNumbers = (num1, num2) => num1 + num2;
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const obj1 = { name: "Krunal", age: 19 };
const obj2 = { ...obj1, gender: "Male" };
const iterableArray = [50, 100, 500];

const sumNumbers = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

for (const element of iterableArray) {
  console.log(element);
}
const mapObj = new Map();
mapObj.set("name", "Krunal");
mapObj.set("age", 19);
let variableLet = "Letter is defined";
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(
      `Hello, my name is ${this.name}, and I am ${this.age} years old.`
    );
  }
}
const setObj = new Set([1, 2, 2, 3, 3, 4, 5]);
const Jyot = new Person("Krunal", 19);

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data is fetched!!");
    }, 2000);
  });
};

fetchData().then((data) => {
  console.log(data);
});
const symbolKey = Symbol("Unique");
const objWithSymbol = { [symbolKey]: "This is a symbol." };

const greetPerson = (name = "Guest") => {
  console.log(`Hello, ${name}!`);
};

  greetPerson("Krunal");
  greetPerson();
  mapObj.forEach((value, key) => console.log(`${key}: ${value}`));
  console.log("Set:", setObj);
  Jyot.sayHello();
  console.log(variableLet);
  console.log("PI:", PI);
  console.log("Sum:", addNumbers(5, 7));
  console.log("arr2:", arr2);
  console.log("obj2:", obj2);
  objWithSymbol[symbolKey] = "Updated symbol key.";
  console.log("Sum of numbers:", sumNumbers(1, 2, 3, 4, 5));
