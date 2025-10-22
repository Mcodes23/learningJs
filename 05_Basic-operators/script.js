"use strict";

/**
 * * Basic operators, maths
 * --------------------------
 * * "unary", "binary", "operand"
 * * An operand
 *  is what operators are applied to.
 *
 * An operator is unary if it has a single operand
 * * Example
 * let x = 1;
 * x = -x;
 * console.log( x ); // -1, unary negation was applied
 *
 * An operator is binary if it has two operands.
 * let x = 1, y = 3;
 * console.log( y - x ); // 2, binary minus subtracts values
 *
 * * Maths
 * The following math operations are supported:
 * 1. Addition +,
 * 2. Subtraction -,
 * 3. Multiplication *,
 * 4. Division /,
 * 5. Remainder %,
 * 6. Exponentiation **.
 *
 * * String concatenation with binary +
 * If the binary + is applied to strings, it merges (concatenates) them:
 * * Example
 * let s = "my" + "string";
 * console.log(s); // mystring
 *
 * ! if any of the operands is a string, then the other one is converted to a string too.
 * * Example
 * cosole.log( '1' + 2 ); // "12"
 *
 * * Numeric conversion, unary +
 * The plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
 * * Example
 * let x = 1;
 * console.log( +x ); // 1
 *
 * let y = -2;
 * console.log( +y ); // -2
 *
 * console.log( +true ); // 1
 * console.log( +"" );   // 0
 *
 * * Increment/decrement
 * Increment ++ increases a variable by 1:
 * * Example
 * let counter = 2
 * counter++
 * console.log(counter)
 *
 * Decrement -- decreases a variable by 1:
 * * Example
 * let counter = 3
 * counter--
 * console.log(counter)
 *
 * ! Increment/decrement can only be applied to variables.
 *
 * The operators ++ and -- can be placed either before or after a variable.
 *  * postfix
 * When the operator goes after the variable, counter++
 *
 * * prefix
 * when the operator goes before the variable, ++counter
 *
 * ! The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).
 *
 *
 */

/*Tasks */
// What are the final values of all variables a, b, c and d after the code below?
let a = 1,
  b = 1;

let c = ++a; // 2
let d = b++; // 1

console.log(c);
console.log(d);

// What are the values of a and x after the code below?
let a2 = 2;

let x = 1 + (a2 *= 2); //  5

console.log(x)

// What are results of these expressions?
/** 
 * "" + 1 + 0 = "10"
 * "" - 1 + 0 = -1
 * true + false = 1
 * 6 / "3" = 2
 * "2" * "3" = 6 
 * 4 + 5 + "px" = "9px"
 * "$" + 4 + 5 =  "$45"
 * "4" - 2 = 2
 * "4px" - 2 = NaN
 * "  -9  " + 5 = " -9 5 "
 * "  -9  " - 5 = -14
 * null + 1 = 1
 * undefined + 1 = NaN
 * " \t \n" - 2 = -2*/

// Fix the addition

let a3 = prompt("First number?", 1);
let b2 = prompt("Second number?", 2);

console.log(+a + +b); // 3