const userEmail = []

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("dont have any user email");
    
}

// falsy value 
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// Truthy value
// truth, "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);

// Ternary operator
// condition ? true: false

const price = 100
price <= 80 ? console.log("less 80"):console.log("more 80");

