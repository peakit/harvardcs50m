function makeFunctionArray() {
    const arr = []

    for (var i = 0; i < 5; i++) {
        arr.push(function () { console.log(i) })
    }
    return arr
}

const functionArr = makeFunctionArray()
functionArr[0]()    // will print 5 since the value of i at the end of the loop is 5

// with let
function makeFunctionArrayWithLet() {
    const arr = []

    // note that i is a let now so its scope is till the next } bracket
    for (let i = 0; i < 5; i++) {
        arr.push(function () { console.log(i) })
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
(function () {
    console.log('hi from IIFE')
})()

counter = function() {
    let count = 0

    return {
        inc: function() {
            console.log(++count)
        },
        get: function() {
            console.log(count)
        }
    }
}()
counter.get()
counter.inc()
counter.get()

// Higher Order Functions HOF
function map(arr, fn) {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    }

    return newArr
}

function addOne(x) {
    return x + 1
}

const x = [1,2,3,4]
console.log(map(x, addOne))