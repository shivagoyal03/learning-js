const user = {
    username: "shiva",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this)
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "Shiva"
//     console.log(this.username)
// }

// const chai =function(){
//      let username = "Shiva"
//     console.log(this.username)
// }

// chai()

// arrow function ---


// const chai =()=>{
//      let username = "Shiva"
//     console.log(this.username)
// }

// () => {}   ---- this is the arrow function

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)


console.log(addTwo(3,4))

