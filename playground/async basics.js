console.log("app started");

var add = x => x*x

setTimeout(() => {
    console.log("first function")
},1000)

setTimeout(() => {
    console.log("second function")
},0)

setTimeout(() => {
    console.log("third function")
},0)

console.log(add(3))

console.log("app finished")