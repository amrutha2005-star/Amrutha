// Function to sort an array in ascending order using Bubble Sort
function bubbleSort(arr) {
    let n = arr.length; // Get the length of the array
    let swapped;

    // Outer loop to go through all array elements
    for (let i = 0; i < n - 1; i++) {
        swapped = false; // Reset the swapped flag at the start of each pass

        // Inner loop to compare adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true; // Mark that a swap occurred
            }
        }

        // If no elements were swapped in the inner loop, the array is sorted
        if (!swapped) break;
    }

    return arr; // Return the sorted array
}

// Example usage
let numbers = [64, 34, 25, 12, 22, 11, 90]; // You can change this array to test other values
console.log("Sorted array:", bubbleSort(numbers));
