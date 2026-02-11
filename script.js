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

console.log(operate("/",1,2));