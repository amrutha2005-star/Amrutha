// Function to square each number in an array
function squareNumbers(arr) {
    // Use the map method to create a new array with squared numbers
    return arr.map(num => num * num);
}

// Example usage
let numbers = [1, 2, 3, 4, 5]; // You can change this array to test other values
console.log("Squared numbers:", squareNumbers(numbers));