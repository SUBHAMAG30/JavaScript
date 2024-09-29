// console.log(Date());

// Dates

let myDate = new Date()  //date is an object**
console.log(myDate); //024-09-29T15:27:43.496Z
console.log(myDate.toString()); //Sun Sep 29 2024 15:28:33 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

// let createDate = new Date(2024, 0, 23)
// let createDate = new Date(2024, 0, 23, 21, 34, 4)
console.log(createDate.toDateString());
console.log(createDate.toLocaleString());

let createDate = new Date("2024-02-23")
console.log(createDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(createDate.getTime())
console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

newDate.toLocaleString('default',{
    weekday: "long"
})

