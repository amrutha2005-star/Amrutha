// Function to check if a year is a leap year
function isLeapYear(year) {
    // A leap year is divisible by 4, but not divisible by 100, unless it's divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It's a leap year
    } else {
        return false; // It's not a leap year
    }
}

// Example usage
let year = 2024; // You can change this year to test other values
console.log(`${year} is a leap year:`, isLeapYear(year));
