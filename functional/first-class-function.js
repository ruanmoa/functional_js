/**
 * A function language is said to have
 * first-class functions when functions in
 * that language are treated like any other
 * variable.
*/

const add = function (a, b){
    return a + b
}

const subtract = function (a, b){
    return a - b
}

const multiply = (a, b) => a * b
const divide = (a, b) => a / b

console.log(add(10, 20))
console.log(subtract(10, 20))
console.log(multiply(10, 20))
console.log(divide(20, 10))