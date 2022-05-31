const prompt = require('prompt-sync')({sigint: true});

let string = (prompt("Enter a string: "));

let string2 = string

while (string.length !==10){
    string = string + string2
    console.log(string)
    console.log("Your string is " + string.length + " characters.")
}