const fs  = require('fs')
const path  = require('path')

function readFile(file_path) {
    return new Promise(resolve => {
        fs.readFile(file_path, (_, content) => resolve(content.toString()))
    })
}

readFile(path.join(__dirname, 'dados.txt')).then(console.log) // Simple

readFile(path.join(__dirname, 'dados.txt'))
    .then(content => content.split('\n'))
    .then(row => row.join(','))
    .then(content => `The final value is:  ${content}`)
    .then(console.log)

