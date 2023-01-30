let arr = [1, 2, 3, 4, 5];

// Insert element 11 at the beginning of the array
arr.unshift(11);
console.log(arr);
// [ 11, 1, 2, 3, 4, 5 ]

// Insert element 11 at index 2
arr.splice(2, 0, 11);
console.log(arr);
// [
//     11, 1, 11, 2,
//      3, 4,  5
//   ]

// Insert element 11 at the end of the array
arr.push(11);
console.log(arr);
// [
//     11, 1, 11,  2,
//      3, 4,  5, 11
//   ]

// Delete element at index 3
arr.splice(3, 1);
console.log(arr);
// [
//     11, 1, 11, 3,
//      4, 5, 11
//   ]

// Sum of all elements in the array
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// 46

// Check if all elements in the array are > 10
const allGreaterThanTen = arr.every(element => element > 10);
console.log(allGreaterThanTen);
// false

// Check if either of element in array is 0
const hasZero = arr.some(element => element === 0);
console.log(hasZero)
// false