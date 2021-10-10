function goodMorning() {
    console.log('Good Morning!')
}
const goodAfternoon = function () {
    console.log('Good Afternoon!')
}

function executeAnything(fn) {
    if(typeof fn === 'function'){
        fn()
    }
    
}

executeAnything(3)
executeAnything(goodMorning)
executeAnything(goodAfternoon)

