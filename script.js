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

let testArray = [1,"+",10];
// console.log(operate(testArray[1],testArray[0],testArray[2]));
// displayNumbers(testArray);
let currentArray = [];

let buttons = document.querySelector(".buttonHolder");
buttons.addEventListener("click", (e) => {
    if (e.target.className == "calc"){
        console.log(e.target);
        currentArray.push(e.target.textContent);
        displayNumbers(currentArray);
    }
    

    if(e.target.textContent == "="){
        let toBeSolved = currentArray.pop();
        console.log(currentArray);
        //Split numbers by opertator
        let test = currentArray.findIndex((operator) => operator == "+" || operator == "-"
        || operator == "*" || operator == "/");
        console.log(test);

        console.log(operate());
        
    }
})