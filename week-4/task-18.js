// Function to calculate the sum of all elements in an array using reduce
function sumOfArray(arr) {
    // Use reduce to calculate the sum, starting from 0
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example usage
let numbers = [1, 2, 3, 4, 5]; // You can change this array to test other values
console.log("Sum of the array:", sumOfArray(numbers));