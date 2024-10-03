const user = {
    username: "Subham",
    age: 21,

    welcomeM: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
    
}
// user.welcomeM()
// user.username = "Agarwal"
// user.welcomeM()

// console.log(this);

// function one(){
//     let username = "Subham"
//     console.log(this.username);
    
// }
// one()

// const one = function(){
//     let username = "Subham"
//     console.log(this.username);
    
// }

const one = () => { // arrow function 
    let username = "Subham"
    console.log(this);
    
}

// one()

// const addTwo = (num1, num2) => {  // explicit return
//     return num1+num2
// }

// const addTwo = (num1, num2) => num1+num2 // implicit return

// const addTwo = (num1, num2) => ({username: "Subham"}) // implicit return
// console.log(addTwo(3,4));


// ------------------------------------------------------


// Immediately Invoked Function Expression (IIFE) -> polution from globl declared variables or functions

// (function any(){
//     console.log(`DB Connected`);   
// })();
// (function any11(){
//     console.log(`DB Connected again`);   
// })();


(function chai(){
    console.log(`DB connected`);
})();

// ( () => {
//     console.log(`Db connected again`);
    
// })()
( (name) => {
    console.log(`Db connected again ${name}`);
    
})('Subham')

