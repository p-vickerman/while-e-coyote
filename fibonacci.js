const prompt = require('prompt-sync')({sigint: true});

let n = Number(prompt("Enter a value for 'n':"))

let int = 1
let a = 1
let b = 0

while(int < n ){
    sum = a + b;
    a = b;
    b = sum;
    console.log(sum)
    int = int + 1;
}