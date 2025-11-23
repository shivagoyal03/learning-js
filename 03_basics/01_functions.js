function loginUserMessage(username){
    if(!username){
        console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage(""));

function calculateCartPrice(...num){ // rest operator (...) converts all the arguments in the form of array
    let sum = 0
    for(let i=0;i<num.length;i++){
        sum += num[i]
    }
    return sum
}

console.log(calculateCartPrice(1,2,3));


const user = {
    username: "shiva",
    price: 495
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)