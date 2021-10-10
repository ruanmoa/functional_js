// arrow function

const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal()

const saudacao = (nome) => `Fala ${nome} !!!`
console.log(saudacao('Maria'))

const somar = numeros => {
    let total = 0
    for(let i of numeros) {
        total += i
    }
    return total
}
console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

const potencia = (base) => {
    return (exp) => {
        return Math.pow(base, exp)
    }
}
console.log(potencia(10)(2))

const potencia2 = base => exp => Math.pow(base, exp)
console.log(potencia2(10)(2))

// this
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

// Com arrow function o this não funciona
Array.prototype.primeiro = () => {
    console.log(this[0])
}

const numeros = [1, 2, 3, 4, 500]
numeros.ultimo()
numeros.primeiro()