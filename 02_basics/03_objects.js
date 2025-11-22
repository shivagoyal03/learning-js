// object literals ----

const mySym = Symbol("key1")

const user = {
    "name" : "shiva",
    email : "shivagoyal876@gmail.com",
    [mySym] : "mykey1", // syntax for symbol
    isLoggedin : false,
    age : 22,
    location : "bhopal"
}

// console.log(user.email);
// console.log(user["name"]);
// console.log(typeof user[mySym]);

// user.email = "shivagoyal@google.com"
// console.log(user);
// Object.freeze(user)     // after applying this, there is no changes occur in object
// user.email = "shivagoyal@chatgpt.com"
// console.log(user);

user.greeting = function(){
    console.log("hello, user");
}

user.greeingTwo = function(){
    console.log(`hello user ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeingTwo());





