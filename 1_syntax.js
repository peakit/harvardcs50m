const firstName = "John";

/* 
With single or double quotes both are string literals.
Also the end of statement semi colon is optional.
*/

const lastName = 'Kennedy'  
const val = 42

const arr = [
    'some string',
    42,
    function() { console.log('hi')}
]

arr[2]() // will call the function at index 2

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}

console.log("== result is ", 42=="42")
console.log("=== result is ", 42==="42") // returns false

console.log(typeof null)

// creating an object
const o1 = new Object()
o1.firstName = "Jon"
o1.lastName = 'Bradman'
o1.isTeaching = true
o1.greet = function() {
	console.log('hi!')
}

// another preferred way to create an object is
const o2 = {}
o2.firstName = "Jon"
o2['lastName'] = 'Bradman'
o2["isTeaching"] = true
o2.greet = function() {
	console.log('hi!')
}

// another way to create an object is inline way
const o3 = {
	firstName: "Jon",
	lastName: 'Bradman',
	isTeaching: true,
	greet: function() {
		console.log('hi!')
	}
}
// everything which is a key in the object is casted to string

// (shallow) cloning all the properties of an object into another object
console.log("Adding a new object property in the object...")
o3.obj = {}
o3.obj.key = 'Some Value'
const o4 = Object.assign({}, o3)
console.log("Cloned object: ", o4)
o4.obj.key = "New Value"

console.log("The cloned object sees the updated value:\n", o4)
console.log("The original object's nested non-primitive properties also changes:\n", o3)

// Prototypal Inheritance
arr.push('a new value')
arr.__proto__

// Reassignment to another memory local for a const variable throws an Error
//val = 31
//val ++

// but with let this is all allowed
let ival = 30
ival = 24
ival++
console.log(ival)
// let ival = 10 // letting ival again is also an error

// with var there is absolutely no protection
var ivar = 10
ivar = 30
ivar++
var ivar = 10
console.log(ivar)

// Hoisting: Something declared later in the file is 
// also available at the top of the file:
// e.g. vars and functions