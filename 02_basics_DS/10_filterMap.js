// const coding = ["js", "ruby", "java", "python","cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })


// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

// const newNums = myNums.map( (num) =>  num + 10)
// console.log(newNums)

// const newNums = myNums
//     .map( (num) =>  num * 10)
//     .map( (num) => num + 1)
//     .filter( (num) => num>=40)
// console.log(newNums);

// ------------------------------------------------------------

// Reduce

const myNum = [1,2,3]
// const myTotal = myNum.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal
// }, 0)

// const myTotal = myNum.reduce( (acc, curr) => acc+curr,0 )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"mobile dev course",
        price: 5999
    },
    {
        itemName:"Data science course",
        price: 12999
    },
    {
        itemName:"web dev course",
        price: 1999
    }
    
]

const PtP= shoppingCart.reduce((acc, item)=> acc+item.price,0)
console.log(PtP);