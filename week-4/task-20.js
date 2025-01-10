// Function to generate the first N numbers in the Fibonacci sequence
function generateFibonacci(N) {
    let fibSequence = [0, 1]; // Initialize the first two numbers of the Fibonacci sequence

    // Generate the Fibonacci sequence up to N numbers
    for (let i = 2; i < N; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]); // Add the next number in the sequence
    }

    return fibSequence.slice(0, N); // Return the sequence with exactly N numbers
}

// Example usage
let N = 10; // You can change this number to generate a different number of Fibonacci numbers
console.log("Fibonacci sequence:", generateFibonacci(N));