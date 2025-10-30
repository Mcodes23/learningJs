"use strict";

let checkYear = true;

while (checkYear) {
  let birthYearInput = prompt("Enter your birth year:");
  let currentYearInput = prompt("Enter current year:");

  if (birthYearInput === null || currentYearInput === null) {
    alert("You must enter both years!");
    continue;
  }

  let birthYear = Number(birthYearInput);
  let currentYear = Number(currentYearInput);

  if (isNaN(birthYear) || isNaN(currentYear)) {
    alert("Please enter valid numbers for years.");
    continue;
  }

  if (birthYear <= 0 || currentYear <= 0) {
    alert("Year cannot be zero or negative.");
    continue;
  }

  if (currentYear < birthYear) {
    alert("Current year cannot be less than birth year.");
    continue;
  }

  let age = currentYear - birthYear;
  alert(`You are ${age} years old.`);
  checkYear = false;
}
