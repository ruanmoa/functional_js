function waitingFor(time = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), time)
    })
}

function returnValue() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function execute() {
    let value = await returnValue()

    await waitingFor(1500)
    console.log(`Async/Await ${value}...`)

    await waitingFor(1500)
    console.log(`Async/Await ${value + 1}...`)

    await waitingFor(1500)
    console.log(`Async/Await ${value + 2}...`)
    
    return value + 3
}

execute().then(console.log)