// Function to convert a binary number (string) to decimal
function binaryToDecimal(binary) {
    // Validate if the input is a valid binary number
    if (!/^[01]+$/.test(binary)) {
        return "Invalid binary number. Only '0' and '1' are allowed.";
    }

    // Convert the binary string to a decimal number
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        decimal = decimal * 2 + parseInt(binary[i]);
    }

    return decimal; // Return the decimal equivalent
}

// Example usage
let binaryNumber = "1101"; // You can change this to test other binary numbers
console.log(`${binaryNumber} in decimal is:`, binaryToDecimal(binaryNumber));
