// Function to calculate the GCD of two numbers using a loop
function gcd(a, b) {
    let min = Math.min(a, b); // Find the smaller of the two numbers
    let gcdValue = 1; // Initialize GCD value as 1

    // Loop through all numbers from 1 to the smaller of the two numbers
    for (let i = min; i >= 1; i--) {
        // Check if both numbers are divisible by i
        if (a % i === 0 && b % i === 0) {
            gcdValue = i; // If they are, update the GCD value
            break; // Exit the loop as we've found the GCD
        }
    }

    return gcdValue; // Return the GCD value
}

// Example usage
let num1 = 56;
let num2 = 98;
console.log(`GCD of ${num1} and ${num2} is:`, gcd(num1, num2));