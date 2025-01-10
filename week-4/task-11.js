// Function to reverse a string using a loop
function reverseString(str) {
    let reversed = ""; // Initialize an empty string to hold the reversed string
    
    // Loop through the string from the end to the beginning
    for (let i = str.length - 1; i >= 0; i--) 
        {
        reversed += str[i]; // Append each character to the reversed string
        }
    
    return reversed; // Return the reversed string
}

// Example usage
let inputString = "Hello, World!"; // You can change this string to test other values
console.log("Reversed string:", reverseString(inputString));
