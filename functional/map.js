const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map(function(el) {
    return el * 2
})
console.log(numbersV2)

const numbersV3 = numbers.map(el => el * 2)
console.log(numbersV3)

const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const getScore = el => el.score
const result = students
    .map(getScore)
    .map(Math.ceil)
console.log(result)

const scores = students.map(el => Math.ceil(el.score))
console.log(scores)
