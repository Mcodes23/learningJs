"use strict";

let flag = true;

while (flag) {
  let userChoice = prompt(
    "Convert:\n1. Celsius to Kelvin\n2. Kelvin to Celsius\n3. Fahrenheit to Celsius\n4. Celsius to Fahrenheit\n5. Fahrenheit to Kelvin\n6. Kelvin to Fahrenheit\n7. Exit"
  );

  if (userChoice === null || userChoice === "7") {
    alert("Goodbye!");
    flag = false;
    continue;
  }

  let tempInput = prompt("Enter temperature:");
  if (tempInput === null) {
    alert("No temperature input!");
    continue;
  }

  let temp = Number(tempInput);
  if (isNaN(temp)) {
    alert("Temperature must be a number!");
    continue;
  }

  let result;

  switch (userChoice) {
    case "1":
      result = convertCelsiusToKelvin(temp);
      alert(`${temp}°C = ${result} K`);
      break;

    case "2":
      result = convertKelvinToCelsius(temp);
      alert(`${temp} K = ${result}°C`);
      break;

    case "3":
      result = convertFahrenheitToCelsius(temp);
      alert(`${temp}°F = ${result}°C`);
      break;

    case "4":
      result = convertCelsiusToFahrenheit(temp);
      alert(`${temp}°C = ${result}°F`);
      break;

    case "5":
      result = convertFahrenheitToKelvin(temp);
      alert(`${temp}°F = ${result} K`);
      break;

    case "6":
      result = convertKelvinToFahrenheit(temp);
      alert(`${temp} K = ${result}°F`);
      break;

    default:
      alert("Invalid choice. Please try again!");
  }
}

/* Conversion Functions */
function convertCelsiusToFahrenheit(temp) {
  return temp * (9 / 5) + 32;
}

function convertCelsiusToKelvin(temp) {
  return temp + 273.15;
}

function convertFahrenheitToCelsius(temp) {
  return ((temp - 32) * 5) / 9;
}

function convertFahrenheitToKelvin(temp) {
  return ((temp - 32) * 5) / 9 + 273.15;
}

function convertKelvinToCelsius(temp) {
  return temp - 273.15;
}

function convertKelvinToFahrenheit(temp) {
  return ((temp - 273.15) * 9) / 5 + 32;
}
