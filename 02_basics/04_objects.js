// merging two objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = Object.assign({},obj1,obj2) // right way
console.log(obj3);

const obj4 = {...obj1,...obj2} // merging two objects
console.log(obj4);

const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:2,
        email:"c@gmail.com"
    }
]

console.log(users[1].email);

const tinderuser = {
    id:"ab23",
    name:"suresh",
    email:"suresh@tinder.com",
    status:"fwb"
}
console.log(tinderuser);
console.log(Object.keys(tinderuser)) // it returns all the keys of the objects in the form of array
console.log(Object.values(tinderuser)) // it returns all the values of the objects in the form of array
console.log(Object.entries(tinderuser)) // it return array of array of key-value pairs

console.log(tinderuser.hasOwnProperty("status"))


console.log(Object.values(users[1]));

