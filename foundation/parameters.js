function logParams(a, b, c){
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5)    // extra values are omitted
logParams(1, 2, 3)          // this values are correspondents to the function parameters number.
logParams(1, 2)             // skiped parameter is set to undefined


function logNums(nums){
    for (let n of nums) {
        console.log(n)        
    }
}
logNums([1, 2, 3])

//spread/rest
function logNumsSpread(...nums){
    console.log(nums)
}
logNumsSpread(1, 2, 3)

function sum(...nums){
    let total = 0
    for(let n of nums) {
        total += n
    }
    console.log(total)
}
sum(1,2,3,4,5,6,7,8,9,10)