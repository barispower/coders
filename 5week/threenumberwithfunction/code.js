
let age
while (true) {
    age = prompt("Enter you age")    
    age = parseInt(age)
    if (!isNaN(age)) {
        break;
    } else {
        alert("Please try again with valid inputs")
    }
}

let retirementAge
while (true) {
    retirementAge = prompt("Enter you retirement age")
    retirementAge = parseInt(retirementAge)
    if (!isNaN(retirementAge)) {
        break;
    } else {
        alert("Please try again with valid inputs")
    }
}
console.log(age)
console.log(retirementAge)
