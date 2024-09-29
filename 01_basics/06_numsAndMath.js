const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const othernumber = 23.9867
console.log(othernumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++    Maths   ++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3.6));
console.log(Math.ceil(3.6));
console.log(Math.floor(3.6));
console.log(Math.sqrt(12.96));

console.log(Math.max(12.96,34.454,532.3,45.0));

console.log(Math.min(12.96,34.454,532.3,45.0));

//Math.random

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); // values btween 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //Important line

