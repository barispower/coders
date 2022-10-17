let num1 = prompt ("Please enter the first number");
let num2 = prompt ("please enter the second number");


if (isNaN (num1)||isNaN (num2)){
    alert("please enter number")
}
else {

    
    if (num1 >= num2){
    
        bigger = num1;
    }
    else ( num2 >= num1)
        bigger = num2;
    
        
    alert("The larger number is " + bigger);

}
