const removeFromArray = function(array, ...numbers) {
    const hashset = new Set(numbers);
    return array.filter(num => !hashset.has(num));
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
// Do not edit below this line
module.exports = removeFromArray;
