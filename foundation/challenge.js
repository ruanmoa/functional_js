// Create a range function
function range(first, second, step = 1){
    const n1 = second === undefined ? 1 : first
    const n2 = second === undefined ? first : second
    const s = n1 <= n2 ? Math.abs(step) : -Math.abs(step)

    const nums = []
    for (let index = n1; n1 <= n2 ? index <= n2 : index >= n2; index+=s) {
        nums.push(index)
    }
    return nums
}

console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(8, -3, 4))