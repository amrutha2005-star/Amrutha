// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Example usage
let celsius = 25; // You can change this value to test other temperatures
let fahrenheit = 77; // You can change this value to test other temperatures

console.log(`${celsius}°C is ${celsiusToFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F is ${fahrenheitToCelsius(fahrenheit)}°C`);
