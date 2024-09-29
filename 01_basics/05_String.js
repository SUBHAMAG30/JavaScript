const name = "subham"
const repoCount = 100

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('subham_com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString); //subham_com

const newString1 = "    Subham    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://subbhamagarwal%34barakar"
console.log(url.replace('%34','-'));

console.log(url.includes('agarwal'));

console.log(gameName.split('_'));
