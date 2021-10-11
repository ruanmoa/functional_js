function worksOrNot(value, errorChance) {
    return new Promise((resolve, reject) => {
        if(Math.random() < errorChance) {
            reject('Ocorreu um erro!')
        } else {
            resolve(value)
        }
    })
}

worksOrNot('Testando...', 0.5)
    .then(v => console.log(`Value: ${v}`))
    .catch(err => console.log(`Error: ${err}`))