// Function to calculate the sum of all numbers in an array
function sumOfArray(arr) {
    let sum = 0; // Initialize sum to 0

    // Loop through the array and add each number to sum
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add the current element to the sum
    }

    return sum; // Return the final sum
}

// Example usage
let numbers = [1, 2, 3, 4, 5]; // You can change this array to test other values
console.log("Sum of the array:", sumOfArray(numbers));
