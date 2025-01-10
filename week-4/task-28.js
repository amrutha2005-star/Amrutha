// Function to generate a random password of a specified length
function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    // Loop to generate a random password by selecting random characters from the 'characters' string
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); // Generate random index
        password += characters[randomIndex]; // Add the selected character to the password
    }

    return password; // Return the generated password
}

// Example usage
let passwordLength = 12; // You can change this to specify the desired password length
console.log("Generated Password:", generateRandomPassword(passwordLength));