// Function to filter out even numbers and return an array of odd numbers
function filterOddNumbers(arr) {
    // Use the filter method to create a new array with odd numbers only
    return arr.filter(num => num % 2 !== 0);
}

// Example usage
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // You can change this array to test other values
console.log("Odd numbers in the array:", filterOddNumbers(numbers));