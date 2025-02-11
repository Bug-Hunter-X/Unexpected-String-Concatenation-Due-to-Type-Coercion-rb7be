# Unexpected String Concatenation in JavaScript

This repository demonstrates a common yet subtle bug in JavaScript related to type coercion during arithmetic operations.

## Bug Description
The `foo` function attempts to add a number and a string. JavaScript's loose typing allows this, but it results in string concatenation instead of the expected numerical addition. This can lead to unexpected behavior and errors if not carefully managed.

## How to Reproduce
1. Clone the repository.
2. Open `bug.js` and run it in a JavaScript environment.
3. Observe that the output is '12' instead of 3, illustrating the unexpected string concatenation.

## Solution
The `bugSolution.js` file provides a corrected version using explicit type conversion (e.g., `parseInt` or `Number`) to ensure numerical addition takes place.

## Lessons Learned
This example highlights the importance of understanding JavaScript's type coercion rules. Always be mindful of the data types involved in your operations to avoid unexpected results.