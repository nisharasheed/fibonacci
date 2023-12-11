const prompt = require('prompt-sync');
// Using memoization to improve performance
const memo = {};

function fibonacci(n) {
    if (n <= 0) {
        return "Invalid input. Please enter a positive integer.";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else if (memo[n]) {
        // Return memoized result if available
        return memo[n];
    } else {
        // Calculate Fibonacci value and memoize the result
        memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return memo[n];
    }
}

// Get user input for the position in the Fibonacci series
const position = parseInt(prompt("Enter the position in the Fibonacci series:"));

// Call the recursive function and print the result
const result = fibonacci(position);
console.log(`The Fibonacci value at position ${position} is: ${result}`);
