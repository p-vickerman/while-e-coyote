const prompt = require('prompt-sync')({sigint: true});

let num = (prompt("Enter a series of numbers and type 'done' when complete: "));

let sum = 0;

while (num !== 'done'){
    sum = sum + parseInt(num);
    num = prompt (">");

}
console.log("The sum of your number inputs is: " + sum);

