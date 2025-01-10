// Function to count the number of words in a sentence
function countWords(sentence) {
    // Split the sentence by spaces and filter out empty strings (in case of extra spaces)
    let words = sentence.trim().split(/\s+/); // Using regex to split by one or more spaces
    return words.length; // Return the number of words
}

// Example usage
let sentence = "This is a simple sentence."; // You can change this to test other sentences
console.log("Number of words:", countWords(sentence));
