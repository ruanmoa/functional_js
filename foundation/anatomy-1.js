//Function declaration

function sayHello() {
    console.log('Hello!')
}
sayHello()


function sayHelloTo(name){
    console.log('Hello ' + name) // Concatenation
    console.log(`Hello ${name}`) // Interpolation
}
sayHelloTo('Ruan')


function returnHi(){
    return 'Hi';
}
const greeting = returnHi()
console.log(greeting)
console.log(returnHi())


function returnHiTo(name){
    return `Hi ${name}`
}
const greetingName = returnHiTo('Ruan')
console.log(greetingName)
console.log(returnHiTo('Ruan'))