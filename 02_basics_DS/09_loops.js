// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "hello World!"
for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

for (const key of map) {
    // console.log(key);
}
for (const [key,value] of map) {
    // console.log(key, ":-", value);
}

// for (const key in map) { ------ Map is not iterable
//     console.log(key);
// }

const myObj = {
    game1 : "NFS",
    game2 : "Spiderman"
}
// for (const [key,value] of myObj) {  ----IT wont work here
//     console.log(key, ":-", value);
// }

const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}
for (const key in myObject) {
    // console.log(key);
    
}
for (const key in myObject) {
    // console.log(myObject[key]);
    
}

const prog = ["js","rb","py","java","cpp"]
for (const key in prog) {
    // console.log(key);
    // console.log(prog[key]);
}

// For each loop
const code = ["Js","ruby","java","pyhton"]

// code.forEach( function (item) {
//     console.log(item);
    
// } )

// code.forEach( (anything) => {
//     console.log(anything);
    
// })

// function printMe(item){
//     console.log(item);
// }

// code.forEach(printMe)

// code.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCode = [
    {
        languageName: "Javascript",
        languagefileName: "js"
    },
    {
        languageName: "Java",
        languagefileName: "java"
    },
    {
        languageName: "Pyhton",
        languagefileName: "py"
    }
]

myCode.forEach( (item) => {
    console.log(item.languageName);
    console.log(item.languagefileName);
})