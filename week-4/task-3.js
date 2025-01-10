// Using 'var'
var x = 10;
console.log("Initial value of x (var):", x); // 10
x = 20; // Reassigning is allowed
console.log("Reassigned value of x (var):", x); // 20

// Using 'let'
let y = 30;
console.log("Initial value of y (let):", y); // 30
y = 40; // Reassigning is allowed
console.log("Reassigned value of y (let):", y); // 40

// Using 'const'
const z = 50;
console.log("Initial value of z (const):", z); // 50
try {
    z = 60; // Attempt to reassign (will throw an error)
} catch (error) {
    console.error("Error when reassigning z (const):", error.message);
}

// Scope demonstration
if (true) {
    var x = 100; // 'var' is function-scoped, not block-scoped
    let y = 200; // 'let' is block-scoped
    const z = 300; // 'const' is block-scoped
    console.log("Inside block - x (var):", x); // 100
    console.log("Inside block - y (let):", y); // 200
    console.log("Inside block - z (const):", z); // 300
}
console.log("Outside block - x (var):", x); // 100 (var leaks outside block)
try {
    console.log("Outside block - y (let):", y); // Error: y is not defined
} catch (error) {
    console.error("Error accessing y outside block:", error.message);
}
try {
    console.log("Outside block - z (const):", z); // Error: z is not defined
} catch (error) {
    console.error("Error accessing z outside block:", error.message);
}
