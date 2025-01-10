// Function to count vowels in a string
function countVowels(str) {
    let vowels = 'aeiouAEIOU'; // Vowels in both lowercase and uppercase
    let count = 0; // Initialize the vowel count to 0
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) { // Check if the character is a vowel
            count++; // Increment the count if it's a vowel
        }
    }

    return count; // Return the total count of vowels
}

// Example usage
let inputString = "Hello, World!"; // You can change this string to test other values
console.log("Number of vowels:", countVowels(inputString));