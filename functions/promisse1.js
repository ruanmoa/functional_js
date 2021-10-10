let p = new Promise(function(fn) {
    fn(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p.then(function(value) {
    console.log(value)
})

// Sequence of operations using 'then'
p
    .then(value => value[0])
    .then(firstName => firstName[0])
    .then(firstLetter => firstLetter.toLowerCase())
    .then(lowerCase => console.log(lowerCase))
    //.then()