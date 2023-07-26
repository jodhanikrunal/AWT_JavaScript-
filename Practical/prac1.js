function addNum(n1 , n2){
    return n1 + n2;
}

function prac1(){
    let name = "Krunal Jodhani";
    let age = 20;
    let isRobot = false;

    console.log("Name : " + name);
    console.log("Age : " + age);
    console.log("Robot : " + isRobot);

    const num1 = parseFloat(prompt("Enter Number 1 : "));
    const num2 = parseFloat(prompt("Enter Number 2 : "));

    console.log(addNum(num1, num2));

}

