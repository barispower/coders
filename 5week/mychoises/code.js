

var choises = ["volleyball", "lightblue", "Cordoba"];
console.log(choises);

//for (let index = 0; index < array.length; index++) {
//const element = array[index];
    

console.log("My first choise is " + choises[1]);
console.log("My first choise is " + choises[2]);
console.log("My first choise is " + choises[3]);

for (var i = 0; i < choises.length; i++) { 
    var choiceNum = i + 1;
var choiceNumSuffix;
    if (choiceNum == 1) {
    choiceNumSuffix = 'st';
 } else if (choiceNum == 2) {
             choiceNumSuffix = 'nd';
} else if (choiceNum == 3) {
     choiceNumSuffix = 'rd';
 } else {
     choiceNumSuffix = 'th';
 }
 console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choises[i]);
}