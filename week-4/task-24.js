// Function to merge two arrays and remove duplicates
function mergeArrays(arr1, arr2) {
    // Combine the two arrays and remove duplicates by converting them to a Set
    let mergedArray = [...arr1, ...arr2]; // Spread syntax to merge arrays
    let uniqueArray = [...new Set(mergedArray)]; // Use Set to remove duplicates

    return uniqueArray; // Return the merged array with no duplicates
}

// Example usage
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
console.log("Merged array without duplicates:", mergeArrays(array1, array2));
