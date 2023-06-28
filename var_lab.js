// let x=1;

// if(x === 1){
//     let x=2;
//     console.log(x);
// }

// console.log(x);

function fun(){
    var x=1;
    function bar(){
        var y=2;
        console.log(x);
        console.log(y);
    }
    bar();
    console.log(x);
    console.log(y);
}

fun();