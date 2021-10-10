/*
 * Functions that operate on other functions,
 * either by taking then as arguments or by
 * returning then, are called higher-order functions. 
 */

function run(fn) {
    return `O Resultado é: ${fn()}`
}

function sayHello() {
    return 'Hello!!!'
}

const result1 = run(sayHello) //Passando a referencia da função
console.log(result1)

run( function() {
    console.log('run!!!')
})

const result2 = run(Math.random)
console.log(result2)