function generateNumBetween(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const factor = max - min + 1
        const random = parseInt(Math.random() * factor) + min
        resolve(random)
    })
}

generateNumBetween(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O numero gerado foi ${numX10}`)
    .then(console.log)