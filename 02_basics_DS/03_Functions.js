// function sayMyName(){
//     console.log("S");
//     console.log("U");
//     console.log("B");
//     console.log("H");
//     console.log("A");
//     console.log("M");
    
// }
// sayMyName()
// sayMyName

/*
function add(n1,n2) // parameters
{
    console.log(n1+n2)
}
const result = add(3,4) // arguments
add(3,"4")
add(3,"a")
add(3,null)

console.log("Result: ", result); // this cannot be done without return
*/

function add(n1,n2) // parameters
{
    return n1+n2
}
const result = add(3,4)
// console.log("Result: ", result);

// function loginUser(username){
//     return `${username} just logged in`
// }
// console.log(loginUser("Subham")) 

// if the arguments are not passed
// function loginUser1(username = "Hero"){
//     if(!username){
//         console.log("Please enter a username");
//         return        
//     }
//     return `${username} just logged in`
// }
// console.log(loginUser1()) 


// --------------------------------------------------------

function calcPrice(...num1){ // ... -> rest/spread operator
    return num1
}
// console.log(calcPrice(200,400,500,800));

const user = {
    username : "subham",
    prices : 199

}
function handle(object){
    console.log(`Username is ${object.username} ans price ${object.prices}`);
    
}
// handle(user)
handle({
    username: "Sam",
    prices : 342
})

const myNewArray = [200,400,500,800]

function returnSecondValue(Array){
    return Array[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,100,240,503]));
