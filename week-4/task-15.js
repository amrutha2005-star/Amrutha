// Function to find the largest number in an array
function findMax(arr) {
    let max = arr[0]; // Initialize max with the first element in the array

    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if the current element is greater
        }
    }

    return max; // Return the largest number
}

// Example usage
let numbers = [5, 3, 9, 1, 7]; // You can change this array to test other values
console.log("Largest number in the array:", findMax(numbers));
