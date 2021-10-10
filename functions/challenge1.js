// sum(3)(4)(5)
function sum(n1 = 0) {
    return function (n2 = 0) {
        return function (n3 = 0) {
            return n1 + n2 + n3
        }
    }
}
console.log(sum(3)(4)(5))

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calculate(3)(7)(fn)
function calculate(n1) {
    return function(n2) {
        return function (fn) {
            if (typeof fn === 'function') {
                return fn(n1, n2)
            }
        }
    }
}

function sub(n1, n2) {
    return n1 - n2
}

function mult(n1, n2) {
    return n1 * n2
}

const values1 = calculate(3)(7)(sub)
const values2 = calculate(3)(7)(mult)
console.log(values1, values2)