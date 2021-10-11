function generateNumBetween(min, max, forbiddenNum) {
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const factor = max - min + 1
        const random = parseInt(Math.random() * factor) + min
        if(forbiddenNum.includes(random)) {
            reject('Forbidden Number!')
        } else {
            resolve(random)
        }
    })
}

async function generateMegaSena(size) {
    try {
        const numbers = []
        for(let _ of Array(size).fill()) {
            numbers.push(await generateNumBetween(1, 60, numbers))
        }
        return numbers
    } catch (e) {
        throw "Oh Noo!!"
    }
}

generateMegaSena(8)
    .then(console.log)
    .catch(console.log)