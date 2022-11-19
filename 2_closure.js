function makeFunctionArray() {
    const arr = []

    for(var i =0; i < 5; i++) {
        arr.push(function() {console.log(i)})
    }
    return arr
}

const functionArr = makeFunctionArray()
functionArr[0]()    // will print 5 since the value of i at the end of the loop is 5

// with let
function makeFunctionArrayWithLet() {
    const arr = []

    // note that i is a let now so its scope is till the next } bracket
    for(let i =0; i < 5; i++) {
        arr.push(function() {console.log(i)})
    }
    return arr
}

const functionArrWithLet = makeFunctionArrayWithLet()
functionArrWithLet[0]() // will print 0 since let goes out of scope on 
                        // end of the for loop

function makeHelloFunction() {
    var message = 'Hello!'

    function sayHello() {
        console.log(message)
    }
    return sayHello
}

const sayHello = makeHelloFunction()

console.log('typeof message: ', typeof message)
console.log(sayHello.toString())

sayHello();

// IIFE - Immediately Invoked Function Expression
(function() {
    console.log('hi from IIFE')
})()