function calculator(num1, num2, operatorSelected){
    // three args
    if((!num1 && num1!=0) || (!num2 &&  num2!=0) || !operatorSelected){
      alert("Please provide both numbers and operator!");
      return;
    }
    //numeric values
    if (typeof num1 !== "number" || typeof num2 !== "number"){
      alert("Please add a numeric value only!");
      return;
    }
  
    //valid operators (+, -, *, /)
    if(operatorSelected !== "+" && operatorSelected != "-" && operatorSelected != "*" && operatorSelected != "/"){
      alert("Please provide valid operator.");
      return;
    }
    let result;
    
    switch(operatorSelected){
      case("+"):
        result = num1 + num2;
        break;
      case("-"):
        result = num1 - num2;
        break;
      case("*"):
        result = num1 * num2;
        break;
      case("/"):
        result = num1 / num2;
        break;
    }
    let response = `${num1} ${operatorSelected} ${num2} = ${result}`;
    //let oper;
    parameters.innerHTML = response;
    equals++;

    /*    let oper = `${num1} ${operatorSelected} ${num2}`;
    document.querySelector("#operation").innerHTML = oper ;
    equals++;*/
  };