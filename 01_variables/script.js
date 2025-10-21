"use strict";

/**
 * * VARIABLES
 * -----------------------
 * Are containers for storing data — a "named storage" for data.
 *
 * * Syntax:
 *   let variableName = value;
 * 
 * * Example:
 *   let message = "Hello, world!"; // stores the string "Hello, world!" in the variable named message
 *   console.log(message);
 * 
 * * Multiline Declaration:
 *   let user = 'John', age = 25, message = 'Hello'; // not recommended for readability
 * 
 * * Copying Variable Value:
 *   let hello = 'Hello world!';
 *   let message;
 *   message = hello;
 * 
 *   console.log(hello);   // Output: Hello world!
 *   console.log(message); // Output: Hello world!
 * 
 * ! Multiple Declaration:
 *   let message = "This";
 *   let message = "That"; 
 *   console.log(message) // SyntaxError: 'message' has already been declared
 * 
 * * CONSTANTS
 * -----------------------
 * Variables that cannot be reassigned. 
 * Attempting to do so causes an error.
 * 
 * * Example:
 *   const myBirthday = '18.04.1982';
 *   myBirthday = '01.01.2001'; 
 * console.log(myBirthday) // Error — can't reassign the constant!
 * 
 * * UPPERCASE CONSTANTS
 * -----------------------
 * Used as aliases for difficult-to-remember values that are known before execution.
 * 
 * * Example:
 *   const COLOR_ORANGE = "#FF7F00";
 *   let color = COLOR_ORANGE;
 *   console.log(color); // Output: #FF7F00
 * 
 * * WHEN TO USE UPPERCASE CONSTANTS
 * -----------------------
 * - Use CAPITALIZED constants as aliases for fixed, “hard-coded” values known before execution.
 * - Use normal-named constants for values determined during runtime.
 * 
 * * Example:
 *   const COLOR_ORANGE = "#FF7F00"; // Known value
 *   const pageLoadTime = // time taken by a webpage to load;
 */

//#region Tasks
/* 
 * Task 1
 * - Declare two variables: admin and name.
 * - Assign the value "John" to name.
 * - Copy the value from name to admin.
 * - Show the value of admin using alert (should output “John”).
 */

let admin;
let name;

name = "John";
admin = name;

console.log(admin); // Output: John

/* 
 * Task 2
 * - Create a variable with the name of our planet. How would you name such a variable?
 * - Create a variable to store the name of a current visitor to a website. How would you name that variable?
 */

let ourPlanetName = "Earth";
let currentUserName = "Mary";

console.log(ourPlanetName);  // Output: Earth
console.log(currentUserName); // Output: Mary
//#endregion
