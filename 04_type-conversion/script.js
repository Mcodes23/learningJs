"use strict"

/**
 * * Type Conversions
 * process of converting data from one type to another
 * * Implicit Conversion
 * JavaScript often performs implicit type conversion to match the expected type for an operation.
 * This is also known as type coercion
 * * Example
 * result = "3" + 2; // "32"
 * result = "3" + true; // "3true"
 * result = "3" + null; // "3null"
 * 
 * * Explicit Conversion
 * Explicit type conversion is when you manually convert one type of data to another using built-in functions.
 * They include:
 * * 1. String Conversion
 * happens when we need the string form of a value.
 * * Syntax
 * String(Value)
 * * Example 
 * let number = 38
 * console.log(typeof number); // number
 * 
 * let str = String(number);
 * console.log(typeof str); // string i.e "38"
 * 
 * * 2. Numeric Conversion
 * Numeric conversion in mathematical functions and expressions happens automatically.
 * * Example
 * console.log( "6" / "2" ); // 3, strings are converted to numbers
 * 
 * * Syntax
 * Number(value)
 * *Example
 * let str = "123";
 * console.log(typeof str); // string
 * 
 * let num = Number(str); // becomes a number 123
 * console.log(typeof num); // number
 * 
 * If the value cannot be converted, it returns NaN (Not a Number).
 * * Example
 * let num = Number("5"); // 5
 * let invalidNum = Number("abc"); // NaN
 * 
 * * numeric conversion rules
 * undefined becomes Nan
 * null becomes 0
 * true and false becomes 1 and 0 
 * string becomes Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN
 * * Example
 * console.log( Number("   123   ") ); // 123
 * console.log( Number("123z") );      // NaN (error reading a number at "z"
 * console.log( Number(true) );        // 1
 * console.log( Number(false) );       // 0
 * 
 * * Boolean Conversion
 * It happens in logical operation but can also be performed explicitly.
 * * Syntax
 * Boolean(value)
 * 
 * * The conversion rule:
 * Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
 * Other values become true.
 * * Example
 * console.log( Boolean(1) ); // true
 * console.log( Boolean(0) ); // false
 * console.log( Boolean("hello") ); // true
 * console.log( Boolean("") ); // false
 * 
 * !the string with zero "0" and non-empty string are true 
 * * Example
 * console.log( Boolean("0") ); // true
 * console.log( Boolean(" ") ); // spaces, also true (any non-empty string is true)
 * 
 */