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


let currentArray = []; //Array that's displayed
let storedArray = []; //History of previous calculations
let readyToCalc = false;
let readyToCalcStorage = false;
let allowNewOperator = false;
const regex = /[+\-*/=]/;
const regexSymbols = /[+\-*/]/;

//TO DO

//Simplify code
//Prevent users from dividing by 0
//Prevent users from adding the same operator - it should use the last operator
//used

let buttons = document.querySelector(".container");
buttons.addEventListener("click", (e) => {
    console.log(allowNewOperator);
    if (e.target.classList.contains("add")){
        // Check if there is more than one operator in either storage or current
        //If so, pop the last indicator out if current
        //Or prevent if stored + error message.
        
        if(allowNewOperator && regexSymbols.test(e.target.textContent)){
            storedArray.push(e.target.textContent);
        }
        else{
            currentArray.push(e.target.textContent);
        }
        allowNewOperator = false;
     
        displayNumbers(currentArray);
    }
    else if (e.target.classList.contains("clear")){
        currentArray = [];
        storedArray = [];
        displayNumbers(currentArray);
    }
    else if (e.target.classList.contains("backSpace")){
        currentArray.pop();
        displayNumbers(currentArray);
    }
    
    let testing = ArrayCalculate(currentArray);
    let mergeCurrentAndStored = storedArray.concat(currentArray);
    let testingStorage = ArrayCalculate(mergeCurrentAndStored);

    //If more than one operator is placed - ignore the first one
    //Check if storage is filled and is an operator
    console.log(`Checking time! ${storedArray}`);
    if(storedArray && regexSymbols.test(storedArray[storedArray.length-1])){
        if(regexSymbols.test(currentArray[currentArray.length-1])){
            alert("You have too many conscutive operations!");
            currentArray.pop();
            displayNumbers(currentArray);
        }
    } else{
        let testOperation1 = currentArray[currentArray.length-1];
        let testOperation2 = currentArray[currentArray.length-2];
        if (regexSymbols.test(testOperation1) && regexSymbols.test(
            testOperation2
        )){
            alert("You have too many conscutive operations!");
            currentArray.pop();
            displayNumbers(currentArray);
        }
    }


    //If not check the current array for two

    if(testing[0] != undefined && Number.isInteger(testing[1]) 
        && Number.isInteger(testing[2])){
        readyToCalc = true;
        }
    else{
        readyToCalc = false;
    }

    //Check the storage
    if(testingStorage[0] != undefined && Number.isInteger(testingStorage[1]) 
        && Number.isInteger(testingStorage[2])){
        readyToCalcStorage = true;
        }
    else{
        readyToCalcStorage = false;
    }

    
    
    if(readyToCalc){
        if(regex.test(e.target.textContent)){
            let validArray = ArrayCalculate(currentArray);
            let finalAns = operate(validArray[0],validArray[1],validArray[2]);
            currentArray = [];
            storedArray = [Math.floor(finalAns)]
            displayNumbers(storedArray);
            if (regexSymbols.test(e.target.textContent)){
                storedArray.push(e.target.textContent);
            }
            else{
                allowNewOperator = true;
            }
        }
    }
    else if (readyToCalcStorage){
        if(regex.test(e.target.textContent)){
            let validArray = ArrayCalculate(mergeCurrentAndStored);
            let finalAns = operate(validArray[0],validArray[1],validArray[2]);
            currentArray = [];
            storedArray = [Math.floor(finalAns)];
            displayNumbers(storedArray);
            if (regexSymbols.test(e.target.textContent)){
                storedArray.push(e.target.textContent);
            }
            else{
                allowNewOperator = true;
            }
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

function CheckOperators(currentArray){

}