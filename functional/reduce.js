const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el
const total = numbers.reduce(sum)
console.log(total)

const total100 = numbers.reduce(sum, 100)
console.log(total100)

const avg = total / numbers.length
console.log(avg)

const avg2 = (acc, el, i, array) => {
    if (i === array.length -1) {
        return (acc + el) / array.length
    }
    else {
        return acc + el
    }
}
const result = numbers.reduce(avg2)
console.log(result)