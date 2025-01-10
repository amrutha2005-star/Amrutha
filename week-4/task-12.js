// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters for better comparison
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Reverse the cleaned string
    let reversedStr = "";
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }

    // Compare the cleaned string with its reversed version
    if (cleanedStr === reversedStr) {
        return true; // The string is a palindrome
    } else {
        return false; // The string is not a palindrome
    }
}

// Example usage
let testString = "A man, a plan, a canal, Panama"; // You can test with other strings
console.log(`Is the string "${testString}" a palindrome?`, isPalindrome(testString));
