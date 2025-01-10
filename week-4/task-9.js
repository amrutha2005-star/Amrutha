// Function to calculate factorial using a for loop
function factorial(n) 
{
    // Initialize result to 1 (since the factorial of 0 is 1)
    let result = 1;
    // Loop to multiply the result by each number from 1 to n
    for (let i = 1; i <= n; i++) 
        {
            result *= i; // Multiply result by i in each iteration
        }
    // Return the calculated factorial
    return result;
}
// Example usage
let number = 5; // You can change this number to test other values
console.log("Factorial of", number,"is", factorial(number));
