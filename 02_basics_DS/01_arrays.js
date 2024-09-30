// // const arr = [0,1,2,3,4,5,true,"subham"]
// const arr = [0,1,2,3,4,5]
// const hero = ["shaktiman", "super"]

// const myArr = new Array(1,2,3,4)

// console.log(arr[3]);

//methods of Arrays

// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(9)
// arr.shift()
// arr.unshift(9)


// console.log(arr.includes(9));
// console.log(arr.indexOf(2));

// const newArr = arr.join()

// console.log(arr);
console.log(typeof newArr);

// slice and splice

console.log("A",arr)

const my1 = arr.slice(1,3)

console.log(my1);
console.log("B",arr)

const my2 = arr.splice(1,3)
console.log(my2);
console.log("C",arr)



// ***************************************************

const hero = ["shaktiman", "super","thor", "ironman"];
const dc = ["superman", "flash", "batman"];

// hero.push(dc)

// console.log(hero);
// console.log(hero[4][1]);

// const allhero = hero.concat(dc)
// console.log(allhero);

const allNewHeros = [...hero,...dc]

// console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("subham"))
console.log(Array.from("subham"))
console.log(Array.from({name: "subham"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
// let score1 = 100

console.log(Array.of(score1,score2,score3));