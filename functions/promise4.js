function generateNumBetween(min, max, time) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function() {
            const factor = max - min + 1
            const random = parseInt(Math.random() * factor) + min
            resolve(random)
        }, time)
    })
}

function generateManyNumbers() {
    return Promise.all([
        generateNumBetween(1, 60, 4000),
        generateNumBetween(1, 60, 1000),
        generateNumBetween(1, 60, 500),
        generateNumBetween(1, 60, 3000),
        generateNumBetween(1, 60, 100),
        generateNumBetween(1, 60, 1500),
    ])
}

generateManyNumbers()
    .then(numbers => console.log(numbers))