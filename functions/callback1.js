function exec(fn, n1, n2) {
    const result = fn(n1, n2)
    console.log(result)
}

const somarNoTerminal = (n1, n2) => n1 + n2
const subtrairNoTerminal = (n1, n2) => n1 - n2

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const cb = () => console.log('Exec,...')
setInterval(cb, 1000)