"use strict";

/**
 * * Function Expressions
 * There is another syntax for creating a function that is called a Function Expression.
 * It allows us to create a new function in the middle of any expression.
 * 
 * * Example
 * let sayHi = function() {
 *   console.log( "Hello" );
 * };
 * 
 * ! no matter how the function is created, a function is a value.
 * 
 * A Function Declaration can be called earlier than it is defined.
 * 
 * * Example
 * sayHi("John"); // Hello, John
 * function sayHi(name) {
 *  alert( `Hello, ${name}` );
 * }
 * If it were a Function Expression, then it wouldn’t work.
 * 
 * In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.
 * 
 * * Example
 * let age = prompt("What is your age?", 18);
 * 
 *  // conditionally declare a function
 * if (age < 18) {
 * 
 *    function welcome() {
 *      alert("Hello!");
 *    }
 *  } else {
 * 
 *    function welcome() {
 *       alert("Greetings!");
 *  }
 * }
 * // ...use it later
 * welcome(); // Error: welcome is not defined
 * 
 * ? What can we do to make welcome visible outside of if?
 * The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility
 * Or we could simplify it even further using a question mark operator "?"
 */
