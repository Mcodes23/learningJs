"use strict";

let birthYearInput = prompt("Enter your birth year: ", 0);
let currentYearInput = prompt("Enter current year: ", 0);

if (birthYearInput === null || currentYearInput === null) {
  alert("You must enter both years!");
} else {
  let birthYear = Number(birthYearInput);
  let currentYear = Number(currentYearInput);

  if (isNaN(birthYear) || isNaN(currentYear)) {
    alert("Please enter valid numbers for years.");
  } else if (birthYear <= 0 || currentYear <= 0) {
    alert("Year cannot be zero or negative.");
  } else if (currentYear < birthYear) {
    alert("Current year cannot be less than birth year.");
  } else {
    let age = currentYear - birthYear;
    alert(`You are ${age} years old`);
  }
}
