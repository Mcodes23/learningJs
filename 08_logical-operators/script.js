"use strict"

/**
 * * Logical Operators
 * There are four logical operators in JavaScript: 
 * * 1. || (OR)
 * * 2. && (AND)
 * * 3. ! (NOT)
 * * 4. ?? (Nullish Coalescing)
 * 
 * ! Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.
 * 
 * * 1. || (OR)
 * If any of its arguments are true, it returns true, otherwise it returns false.
 * * Syntax
 * result = a || b;
 * 
 * * There are four possible logical combinations:
 * console.log( true || true );   // true
 * console.log( false || true );  // true
 * console.log( true || false );  // true
 * console.log( false || false ); // false
 * 
 * given:
 * result = value1 || value2 || value3;
 * The OR || operator does the following:
 * 1. Evaluates operands from left to right.
 * 2. For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
 * 3. If all operands have been evaluated (i.e. all were false), returns the last operand.
 * 
 * * 2. &&(AND)
 * AND returns true if both operands are truthy and false otherwise
 * * Syntax
 * result = a && b;
 * 
 * * There are four possible logical combinations:
 * console.log( true && true );   // true
 * console.log( false && true );  // false
 * console.log( true && false );  // false
 * console.log( false && false ); // false
 * 
 * ! AND “&&” finds the first falsy value
 * 
 * given:
 * result = value1 && value2 && value3;
 * The AND && operator does the following:
 * Evaluates operands from left to right.
 * For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
 * If all operands have been evaluated (i.e. all were truthy), returns the last operand.
 * 
 * ! && has higher prrecedence than ||
 *
 * * 3. !(Not)
 * The operator accepts a single argument and does the following:
 *  1. Converts the operand to boolean type: true/false.
 *  2. Returns the inverse value.
 * 
 * * Example
 * console.log( !true ); // false
 * console.log( !0 ); // true
 * 
 * * ??(Nullish Coalescing)
 * is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
 * 
 * * syntax
 * leftExpr ?? rightExpr
 * 
 * * Example
 * const nullValue = null;
 * const emptyText = ""; // falsy
 * const someNumber = 42;
 * 
 * const valA = nullValue ?? "default for A";
 * const valB = emptyText ?? "default for B";
 * const valC = someNumber ?? 0;
 * 
 * console.log(valA); // "default for A"
 * console.log(valB); // "" (as the empty string is not null or undefined)
 * console.log(valC); // 42
 * 
 * The common use case for ?? is to provide a default value.
 * 
 * * Comparison wit ||
 * || returns the first truthy value.
 * ?? returns the first defined value.
 * 
 * ! It’s forbidden to use it with || or && without explicit parentheses.
 */