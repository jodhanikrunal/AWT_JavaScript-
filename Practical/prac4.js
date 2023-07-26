let glb_var = 0;

function Fact(number){

  function fact_rec(n) {
    if(n==0)
    return 1;

    else 
    return n * fact_rec(n-1);
  }

  let lcl_var = fact_rec(number);

  glb_var = lcl_var;

  return lcl_var;
}
  
    console.log("Accessing global Var :", glb_var);
    // console.log("Accessing local var : ", lcl_var);

    let num = 5;
    let result = Fact(num);
    console.log(`Factorial of ${num} is : `, result);