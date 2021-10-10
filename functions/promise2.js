// setTimeout(function() {
//     console.log('Executing callback externa...')

//     setTimeout(function() {
//         console.log('Executing callback interna...')

//     }, 2000)
// }, 2000)

function waitingFor(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executing promise...')
            resolve()
        }, time)
    })
}

waitingFor()
    .then(() => waitingFor())
    .then(waitingFor)