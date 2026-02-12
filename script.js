function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    if (num2 == 0){
        return Error;
    }
    else{
        return num1/num2;
    }
}



//This function takes any two integers, and applies an operator to them
//Input: two seperate integers
//Output: an integer
function operate(func, num1, num2){
    let ans = "no answer";
    console.log(func);
    switch(func){
        case "+":
            ans = add(num1,num2);
            break
        case "-":
            ans = subtract(num1,num2);
            break
        case "*":
            ans = multiply(num1,num2);
            break
        case "/":
            ans = divide(num1,num2);
            break
    }
    return ans;
       
}

//Changes the display of the calculator
function displayNumbers(displayArray){
    let display = document.querySelector("#display");
    //Add them to the document element
    display.textContent = displayArray.join("");
}

let testArray = [1,"+",10];
// console.log(operate(testArray[1],testArray[0],testArray[2]));
// displayNumbers(testArray);
let currentArray = [];
let readyToCalc = false;

let buttons = document.querySelector(".buttonHolder");
buttons.addEventListener("click", (e) => {

    if (e.target.className == "calc"){
        console.log(e.target);
        currentArray.push(e.target.textContent);
        displayNumbers(currentArray);
    }

    
    let testing = ArrayCalculate(currentArray);
    console.log(testing);
    if(typeof(testing[2]) == "integer"){
        readyToCalc = true;
    }
    else{
        readyToCalc = false;
    }
    
    if(readyToCalc == true){
        if(e.target.textContent == "="){
        let toBeSolved = currentArray.pop(); //To get rid of the "="
        //Split numbers by opertator
        let validArray = ArrayCalculate(currentArray);
        let finalAns = operate(validArray[0],validArray[1],validArray[2]);
        currentArray = [finalAns];
        displayNumbers(currentArray);
        }
    }
    


})


function ArrayCalculate(currentArray){
    let test = currentArray.findIndex((operator) => operator == "+" || operator == "-"
        || operator == "*" || operator == "/");
        let num1 = parseInt(currentArray.slice(0, test).join(""));
        let num2 = parseInt(currentArray.slice(test+1).join(""));
        return [currentArray[test],num1,num2];
}