// Function to remove duplicates from an array
function removeDuplicates(arr) {
    let uniqueArray = []; // Initialize an empty array to store unique values

    // Loop through each element in the original array
    for (let i = 0; i < arr.length; i++) {
        // If the element is not already in the uniqueArray, add it
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray; // Return the array with no duplicates
}

// Example usage
let numbers = [1, 2, 2, 3, 4, 4, 5]; // You can change this array to test other values
console.log("Array without duplicates:", removeDuplicates(numbers));