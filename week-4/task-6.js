// Define some Boolean values
let a = true;
let b = false;

// AND (&&) Operator
console.log("a && b:", a && b); // true AND false => false

// OR (||) Operator
console.log("a || b:", a || b); // true OR false => true

// NOT (!) Operator
console.log("!a:", !a); // NOT true => false
console.log("!b:", !b); // NOT false => true

// More complex expressions
let x = 10;
let y = 5;

console.log("x > 5 && y < 10:", x > 5 && y < 10); // true AND true => true
console.log("x < 5 || y < 10:", x < 5 || y < 10); // false OR true => true
console.log("!(x > 5):", !(x > 5)); // NOT (true) => false
console.log("!(x < 5 || y > 10):", !(x < 5 || y > 10)); // NOT (false OR false) => true
