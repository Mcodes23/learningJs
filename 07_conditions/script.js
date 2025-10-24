"use strict";
// const prompt = require("prompt-sync")();
/**
 * * if statement, '?'
 * The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
 * * Syntax
 * if(condition) {
 *  block of code
 * }
 *
 * * Example
 * let year = prompt('In which year was ECMAScript-2015 specification published?', '');
 * if (year == 2015) {
 * alert( 'You are right!' );
 * }
 *
 * * falsy values
 * 1. 0
 * 2. ""
 * 3. null
 * 4. undefined
 * 5. NaN
 * the other values become "truthy"
 * * Example
 * if (0) {
 *  ...
 * }
 * !this code will never execute
 *
 * * The "else" clause
 * Executes when the if statement is falsy
 *
 * * Syntax
 * if(falsy condition) {
 *  block of code
 * } else {
 *  execute this
 * }
 *
 * * Example
 * let age = 20
 *
 * if (age > 5) {
 *  console.log("You guessed right")
 * } else {
 *  console.log("How can you be so wrong?")
 * }
 *
 * * "else if"
 * tests several variants of a condition
 *
 * * Example
 * let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
 * if (year < 2015) {
 *  console.log( 'Too early...' );
 * } else if (year > 2015) {
 *  console.log( 'Too late' );
 * } else {
 *  console.log( 'Exactly!' );
 * }
 *
 * * ternary operator "?"
 * shorthand for writing conditional if...else statements.
 * It is the only operator in JavaScript that takes three operands: a condition, a value if the condition is true, and a value if the condition is false.
 * * Syntax
 * condition ? expressionIfTrue : expressionIfFalse;
 *                  or
 * let result = condition ? value1 : value2;
 *
 * allows assigning of a variable depending on a condition
 * * Example
 * let accessAllowed;
 * let age = prompt('How old are you?', '');
 *
 * if (age > 18) {
 *  accessAllowed = true;
 * } else {
 *  accessAllowed = false;
 * }
 *
 * console.log(accessAllowed);
 *
 * can be written as:
 * let accessAllowed = (age > 18) ? true : false
 * console.log(accessAllowed);
 *
 * * Non-traditional use of '?'
 * Sometimes the question mark ? is used as a replacement for "if":
 * let company = prompt('Which company created JavaScript?', '');
 * (company == 'Netscape') ?
 *      console.log('Right!') : console.log('Wrong.');
 */

/* Tasks */
// if (a string with zero), Will the output be shown?
if ("0") {
  console.log(" Hello "); // yes
}

// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
// let JavaScriptOfficialName = prompt("What's the official name of JavaScript? ");

// if (JavaScriptOfficialName === "ECMAScript") {
//   console.log("Right!");
// } else {
//   console.log("You don't know? ECMAScript!");
// }

/* 
 Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/
let a = 2;
let b = 1;
let result = a + b < 4 ? "Below" : "Over";
console.log(result);

// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = "Employee";
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
console.log(message);
