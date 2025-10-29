"use strict";

/**
 * * Functions
 * modular units of code  designed to perform specific tasks
 *
 * * Syntax
 *
 * function functionName(parameter1, parameter2, ... parameterN){
 *  // body
 * }
 *
 * * Function Declaration
 * function showMessage() {
 *  console.log( 'Hello everyone!' );
 * }
 *
 * Our new function can be called by its name: showMessage().
 * The call showMessage() executes the code of the function.
 *
 * * Local Variables
 * A variable declared inside a function and is only visible inside that function.
 *
 * * Example
 * let myFunction(){
 *  let num = 2; // local variable
 *
 *  console.log(num)
 * }
 *
 * myFunction()
 *
 * console.log(num) // <-- Error! The variable is local to the function
 *
 * * Global Variables(Outer Variables)
 * This variable is declared outside any function and are accessible throught the program
 * * Example
 * let num = 5; // global variable
 *
 * function myFunction(){
 *  num = 10; changed outer variable
 *
 *  let sum = 5 + num
 *  console.log(sum)
 * }
 *
 * console.log(num) // 5 before the function call
 *
 * myFunction()
 *
 * console.log(num)  // 10 after the function call
 *
 * The outer variable is only used if there’s no local one.
 * If a same-named variable is declared inside the function then it shadows the outer one.
 * * Example
 * let userName = 'John';
 *
 * function showMessage() {
 *  let userName = "Bob"; // declare a local variable
 *
 *  let message = 'Hello, ' + userName; // Bob
 *  console.log(message);
 * }
 * // the function will create and use its own userName
 * showMessage();
 *
 * console.log( userName );
 *
 * ! Global variables are visible from any function (unless shadowed by locals).
 *
 * * Parameters
 * We can pass arbitrary data to functions using parameters.
 *
 * * Example
 * function showMessage(from, text) { // parameters: from, text
 *  alert(from + ': ' + text);
 * }
 *
 * showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
 * showMessage('Ann', "What's up?"); // Ann: What's up? (**)
 *
 * A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
 * An argument is the value that is passed to the function when it is called (it’s a call time term).
 *
 * ! We declare functions listing their parameters, then call them passing arguments.
 *
 * * Default Values
 * If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
 * For instance, the aforementioned function showMessage(from, text) can be called with a single argument:
 * showMessage("Ann");
 * That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.
 * We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:
 * * Example
 * function showMessage(from, text = "no text given") {
 *  alert( from + ": " + text );
 * }
 *
 * showMessage("Ann"); // Ann: no text given
 *
 * * Returning a value
 * A function can return a value back into the calling code as the result.
 * * Example
 * function sum(a, b) {
 *  return a + b;
 * }
 * let result = sum(1, 2);
 * console.log( result ); // 3
 *
 * The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).
 * There may be many occurrences of return in a single function. For instance:
 * function checkAge(age) {
 *  if (age >= 18) {
 *     return true;
 *  } else {
 *     return confirm('Do you have permission from your parents');
 *  }
 * }
 *
 * let age = prompt('How old are you?', 18);
 *
 * if ( checkAge(age) ) {
 *  console.log( 'Access granted' );
 * } else {
 *  console.log( 'Access denied' );
 * }
 * It is possible to use return without a value. That causes the function to exit immediately.
 * * Example
 * function showMovie(age) {
 *  if ( !checkAge(age) ) {
 *      return;
 *  }
 *
 *  console.log( "Showing you the movie" ); // (*)
 * // ...
 * }
 *
 * ! A function with an empty return or without it returns undefined
 *
 * function doNothing() { //empty }
 *
 * console.log( doNothing() === undefined ); // true
 */

/* Tasks */
// Rewrite the function using '?' or '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

function checkAge(age) {
  return age > 18 ? true : console.log("Did parents allow you?");
}

checkAge(20);

// Function min(a, b)

// Write a function min(a,b) which returns the least of two numbers a and b.

function min(num1, num2) {
  return Math.min(num1, num2);
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

console.log("--------------");

// Function pow(x,n)

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
  if (n < 1) {
    console.log(`Power ${n} is not supported, use a positive integer`);
    return;
  }

  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let n = -3;
console.log(pow(3, n));
