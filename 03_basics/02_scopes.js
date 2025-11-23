function one(){
    const username = "shiva"
    function two(){
        const mail = "shivagoyal876@gmail.com"
        console.log(username);
    }
    // console.log(mail) (parents can't access childrens variables)
    two()
}
// one()

// ++++++++++++++++ intersting ++++++++++++++++

console.log(addOne(5))  // concept of hoisting (fully hoisted)
function addOne(num){
    return ++num
}

// console.log(addTwo(5));  // partially hoisted because js says that “I know the variable name addTwo, but I haven’t put anything inside it yet.”
const addTwo = function(num){
    return num+2
}
