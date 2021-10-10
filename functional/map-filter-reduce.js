const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const getScore = el => el.score
const getGreatStudents = highScores => highScores >= 9
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) {
        return (acc + el) / array.length
    }
    else {
        return acc + el
    }
}

console.log(
    students
        .map(getScore)
        .filter(getGreatStudents)
        .reduce(avg))