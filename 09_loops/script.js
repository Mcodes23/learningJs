"use strict";

/**
 * * Loops: while and for
 * Loops are a way to repeat the same code multiple times.
 *
 * * 1. The “while” loop
 * * Syntax
 * while (condition) {
 *  code
 *  so-called "loop body"
 * }
 * While the condition is truthy, the code from the loop body is executed.
 *
 * * Example
 * let i = 0;
 * while (i < 3) { // shows 0, then 1, then 2
 * console.log( i );
 * i++;
 * }
 *
 * * 2. The “do…while” loop
 * The condition check can be moved below the loop body using the do..while
 * * Syntax
 * do {
 *   loop body
 * } while (condition);
 *
 * The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
 *
 * * Example
 * let i = 0;
 * do {
 *  alert( i );
 *  i++;
 * } while (i < 3);
 *
 * Allows the body of the loop to execute atleast once.
 *
 * * The “for” loop
 * * Syntax
 * for (begin; condition; step) {
 *   ... loop body ...
 * }
 *
 * * Example
 * for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
 *      alert(i);
 * }
 *
 * * Breaking the loop
 * Normally, a loop exits when its condition becomes falsy.
 * But we can force the exit at any time using the special "break" directive.
 *
 * * Example
 * let sum = 0;
 * while (true) {
 *
 *  let value = +prompt("Enter a number", '');
 *
 *  if (!value) break; // (*)
 *
 *  sum += value;
 *
 * }
 * alert( 'Sum: ' + sum );
 *
 * * Continue to the next iteration
 * It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
 *
 * * Example
 * for (let i = 0; i < 10; i++) {
 *
 *  // if true, skip the remaining part of the body
 *  if (i % 2 == 0) continue;
 *
 * alert(i); // 1, then 3, 5, 7, 9
 * }
 *
 * ! No break/continue to the right side of ‘?’
 * * Example
 * (i > 5) ? alert(i) : continue; // continue isn't allowed here
 *
 * * Labels for break/continue
 * Sometimes we need to break out from multiple nested loops at once.
 * * Example
 * for (let i = 0; i < 3; i++) {
 *
 *  for (let j = 0; j < 3; j++) {
 *
 *  let input = prompt(`Value at coords (${i},${j})`, '');
 *
 *  // what if we want to exit from here to Done (below)?
 *  }
 * }
 * alert('Done!');
 *
 * We need a way to stop the process if the user cancels the input.
 * The ordinary break after input would only break the inner loop. So labels come through
 *
 * * Syntax
 * labelName: for (...) {
 *  ...
 * }
 *
 * * Example
 * outer: for (let i = 0; i < 3; i++) {
 *
 *  for (let j = 0; j < 3; j++) {
 *
 *  let input = prompt(`Value at coords (${i},${j})`, '');
 *
 *  // if an empty string or canceled, then break out of both loops
 *  if (!input) break outer; // (*)
 *
 *  // do something with the value...
 *  }
 * }
 * alert('Done!');
 *
 * ! The continue directive can also be used with a label.
 */

/* Tasks */

// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  // loops start from 3
  console.log(i--); // 3, 2, 1
}

console.log("------------");
// For every loop iteration, write down which value it outputs and then compare it with the solution.
// 1. The prefix form ++i (returns the new value)
let i2 = 0;
while (++i2 < 5) console.log(i2); // 1, 2, 3, 4

console.log("------------");

// 2. The postfix form i++ (returns the old value)

let i3 = 0;
while (i3++ < 5) console.log(i3); // 1, 2, 3, 4, 5

console.log("------------");

// Use the for loop to output even numbers from 2 to 10.

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

// let num;

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

console.log("-----------")
// Output prime numbers

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    
    if (i % j == 0) continue nextPrime;
  }

  console.log(i); 
}
