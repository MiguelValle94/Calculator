var count = 0;
var equals = 0;

function printNum1(num){
  if (equals === 0){ 
    if (count === 0){
      document.getElementById('parameters').innerHTML = '';
      parameters.innerHTML += num;
      count++;
    }else{
      parameters.innerHTML += num;
    }
  }
};

var operatorSelected= "";
function printOperator(oper){
  parameters.innerHTML += oper;
  operatorSelected = oper;
};


function getTheParameters(){
  let strParameters= document.getElementById("parameters").textContent;
  separateParameters(strParameters);
};

function separateParameters(str){
  let separatedStr;
  if (str.includes("+")){
    separatedStr = str.split("+");
  }else if (str.includes("-")){
    separatedStr = str.split("-");
  }else if (str.includes("*")){
    separatedStr = str.split("*");
  }else if (str.includes("/")){
    separatedStr = str.split("/");
  }
  var num1 = Number(separatedStr[0]);
  var num2 = Number(separatedStr[1]);
  calculator(num1, num2, operatorSelected);
};

function clearNumbers(){
  parameters.innerHTML = 0;
  count = 0;
  equals = 0;
}

function deleteNumbers(){
  if (equals === 0){
    let currentNumbers = document.getElementById("parameters").textContent;
    currentNumbers = currentNumbers.substring(0, currentNumbers.length - 1);
    parameters.innerHTML = currentNumbers;
    if (currentNumbers.length === 0){
      parameters.innerHTML = 0;
      count = 0;
    }
  }
}


