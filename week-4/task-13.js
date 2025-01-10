// Function to check if a number is prime
function isPrime(num) {
    // Numbers less than 2 are not prime
    if (num <= 1) {
        return false;
    }

    // Check for factors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // The number is divisible by i, so it's not prime
        }
    }

    return true; // The number is prime
}

// Example usage
let number = 29; // You can change this number to test other values
console.log(`${number} is prime:`, isPrime(number));