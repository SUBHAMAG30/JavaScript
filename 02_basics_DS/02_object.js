//object literals 

// Symbol banao
const mySym = Symbol("key1")

const User = {
    name: "Subham",
    "full name" : "Subham Agarwal",
    [mySym] : "myKey1",
    age : 21,
    location: "Asansol",
    email: "Agarwal@yahoo.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Wednesday"]
}

// Access objects

// console.log(User.email);
// console.log(User["email"]);
// console.log(User["full name"]);
// console.log(User[mySym]);

// User.email = "Subham@yes.com"
// Object.freeze(User)
// User.email = "Agarwakdjsdb34d.vvom"
// console.log(User);

User.greeting = function(){
    console.log("Hello viewers!!");
    
}
User.greeting2 = function(){
    console.log(`Hello viewers!!, ${this.name}`);
    
}
// console.log(User.greeting());
// console.log(User.greeting2());

// -----------------------------------------------------
// singleton 

// const tUser = new Object()
const tUser = {}

tUser.id = "123abc"
tUser.name = "hero"
tUser.isLoggedIn = false


// console.log(tUser);

const rUser = {
    email: "somebody@google.com",
    fullname: {
        userFullName: {
            firstname: "hero",
            lastname: "gupta"
        }
    }
}

// console.log(rUser.fullname.userFullName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {obj1, obj2} // target, source

const obj5 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);
// console.log(obj5);

const ob1 = {...obj1,...obj2,...obj3}
// console.log(ob1);


const users = [
    {
        id: 1,
        email:"djfldn@sknd.com"
    }
]

users[0].email
console.log(tUser);

console.log(Object.keys(tUser));
console.log(Object.values(tUser));
console.log(Object.entries(tUser));

console.log(tUser.hasOwnProperty('isLoggedIn'));

// 88888888888888888888888888888888888888888888888888888888888

// destructing of object

const college ={
    collegename: "AEC",
    fee : "4.5lac",
    principal: "Panda"

}
// college.principal

const {principal: head} = college

// console.log(principal);
console.log(head);

// JSON

// {
//     name:"subham",
//     age:21,
// }
