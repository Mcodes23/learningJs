"use strict";

let flag = true;

while (flag) {
  let numberInput = prompt("Enter a number: ");

  if (numberInput === null) {
    let confirmExit = prompt("Do you want to quit? yes/no:");
    if (confirmExit && confirmExit.toLowerCase() === "yes") {
      alert("Goodbye!");
      break;
    } else {
      continue;
    }
  }

  let num = Number(numberInput);
  if (isNaN(num)) {
    alert("Input should be a number");
    continue;
  }

  if (isEven(num)) {
    alert(`${num} is Even`);
  } else {
    alert(`${num} is Odd`);
  }

  let newInputNumber = prompt("Do you want to play again yes/no: ");
  if (newInputNumber && newInputNumber.toLowerCase() === "yes") {
    continue;
  } else if (newInputNumber && newInputNumber.toLowerCase() === "no") {
    alert("GOODBYE!");
    flag = false;
  } else {
    alert("Please enter 'yes' or 'no'");
  }
}
/**
 * Checks whether a number is even.
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Checks whether a number is odd.
 * @param {number} num
 * @returns {boolean}
 */
function isOdd(num) {
  return num % 2 !== 0;
}
