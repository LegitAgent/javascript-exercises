const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (x < 0 || y < 0) return "ERROR";
    let start;
    let finish;
    if(x > y) {
        start = y;
        finish = x;
    } else {
        start = x;
        finish = y;
    }
    let sum = 0;
    for(let i = start; i <= finish; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumAll(123, 1))

// Do not edit below this line
module.exports = sumAll;
