function one(){
    const username = "Subham"

    function two(){
        const website = "Google"
        console.log(username);
        
    }
    // console.log(website) //wrong statement
    two()
}
// one()

if(true){
    const username = "Subham"
    if(username === "Subham"){
        const website = " Google"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++++++++++++++++++++++++++++++
//addone(5) can be initailed here too
function addone(num){
    return num+1
}
addone(5)


const addtwo = function(num){
    return num+2
}
addtwo(5)