"use strict";

/**
 * * Data Types
 * -----------------------
 * an attribute that specifies the kind of value a variable can hold and the operations that can be performed on it
 *
 * There are 8 basic data types in Javascript:
 *
 * * 1. Number
 * A number representing a mathematical value i.e both integers and floating point numbers
 * * Example
 * let length = 16;
 * let weight = 7.5;
 *
 * * Operations for numbers include:
 * 1. Addition(+)
 * 2. Subtraction(-)
 * 3. Multiplication(*)
 * 4. Division(/)
 * 
 * Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
 * * Infinity
 * It is a special value that’s greater than any number.
 * * Example
 * console.log( 1 / 0 ); // Infinity
 * or
 * console.log( Infinity ) // Infinity
 * 
 * * NaN
 * NaN stands for "Not-a-Number.
 * It is a special value that indicates an invalid number or an operation that doesn't result in a valid numeric value
 * * Example
 * console.log( "not a number" / 2 );
 * console.log( 3 * NaN ); // NaN
 * 
 * * 2. String
 * A text of characters enclosed in quotes
 * there are 3 types of quotes.
 * 1. Double quotes: "Hello".
 * 2. Single quotes: 'Hello'.
 * 3. Backticks: `Hello`.
 * Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}.
 * * Example
 * let color = "Yellow";
 * let lastName = "Johnson";
 *
 * * 3. Bigint
 * A number representing a large integer
 * In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
 * 
 * * Example
 * let x = 1234567890123456789012345n;
 * let y = BigInt(1234567890123456789012345)
 *
 * * 4. Boolean
 * A data type representing true or false
 * * Example
 * let x = true;
 * let y = false;
 *
 * * 5. Object
 * A collection of key-value pairs of data
 * * Example
 * const person = {firstName:"John", lastName:"Doe"};
 *
 * * 6. Undefined
 * A primitive variable with no assigned value.
 * If a variable is declared, but not assigned, then its value is undefined.
 * Makes a type of its own.
 * * Example
 * let x;
 * let y;
 *
 * * 7. Null
 * In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
 * It’s just a special value which represents “nothing”, “empty” or “value unknown”.
 * Makes a type of its own.
 * * Example
 * let x = null;
 * let y = null;
 *
 * * 8. Symbol
 * A unique and primitive identifier
 * used to create unique identifiers for objects.
 * * Example
 * const x = Symbol();
 * const y = Symbol();
 *
 * * The typeof operator
 * returns the type of the operand.
 * Useful when processing values of different types differently or just want to do a quick check.
 * Allows us to see which type is stored in a variable
 * * Example
 * typeof undefined // "undefined"
 * typeof 0 // "number"
 * typeof 10n // "bigint"
 * 
 */

// Tasks
/* Practice problems */
let name = "Ilya";

console.log( `hello ${1}` ) // hello 1

console.log( `hello ${"name"}` ); // hello name

console.log( `hello ${name}` ); // hello Ilya