// immediately invoked function expressions (iife)

( function chai(){
//    named iife
    console.log(`DB CONNECTED`)
})();

((name)=>{
    // unamed iife
    console.log(`DB CONNECTED TWO ${name}`)
})("shiva")
