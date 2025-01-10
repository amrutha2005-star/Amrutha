// Import the readline module for user input in Node.js
const readline = require('readline');

// Create an interface to read input from stdin
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform basic arithmetic operations
function simpleCalculator() {
    // Ask the user to input the first number
    rl.question("Enter the first number: ", (num1) => {
        num1 = parseFloat(num1);  // Convert input to a number

        // Ask the user to input the second number
        rl.question("Enter the second number: ", (num2) => {
            num2 = parseFloat(num2);  // Convert input to a number

            // Ask the user to input an operator
            rl.question("Enter the operator (+, -, *, /): ", (operator) => {
                
                // Validate that the inputs are numbers
                if (isNaN(num1) || isNaN(num2)) {
                    console.log("Invalid input! Please enter valid numbers.");
                    rl.close();
                    return;
                }

                // Perform the operation based on the operator
                let result;
                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        // Check for division by zero
                        if (num2 === 0) {
                            console.log("Error: Cannot divide by zero.");
                            rl.close();
                            return;
                        }
                        result = num1 / num2;
                        break;
                    default:
                        console.log("Invalid operator! Please use one of the following: +, -, *, /.");
                        rl.close();
                        return;
                }

                // Display the result
                console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
                rl.close(); // Close the readline interface
            });
        });
    });
}

// Call the simpleCalculator function to execute the program
simpleCalculator();
