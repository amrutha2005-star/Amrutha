// Function to calculate the LCM of two numbers
function lcm(a, b) {
    // Function to calculate the GCD of two numbers
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    // Formula to calculate LCM using GCD
    return (a * b) / gcd(a, b);
}

// Example usage
let num1 = 12;
let num2 = 15;
console.log(`LCM of ${num1} and ${num2} is:`, lcm(num1, num2));
