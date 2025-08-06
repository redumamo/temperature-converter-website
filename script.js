// DOM Elements
const temperatureInput = document.getElementById('temperature-input');
const unitSelect = document.getElementById('unit-select');
const convertBtn = document.getElementById('convert-btn');
const resultDisplay = document.getElementById('result-display');

// Conversion Functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
  return fahrenheitToCelsius(fahrenheit) + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

// Convert Temperature
function convertTemperature() {
  const inputValue = temperatureInput.value.trim();
  const inputUnit = unitSelect.value;

  if (isNaN(inputValue) || inputValue === '') {
    resultDisplay.textContent = "Please enter a valid number!";
    return;
  }

  const temperature = parseFloat(inputValue);
  let convertedValues = '';

  switch (inputUnit) {
    case 'celsius':
      convertedValues = `
        ${temperature}°C = ${celsiusToFahrenheit(temperature).toFixed(2)}°F,
        ${celsiusToKelvin(temperature).toFixed(2)}K
      `;
      break;

    case 'fahrenheit':
      convertedValues = `
        ${temperature}°F = ${fahrenheitToCelsius(temperature).toFixed(2)}°C,
        ${fahrenheitToKelvin(temperature).toFixed(2)}K
      `;
      break;

    case 'kelvin':
      convertedValues = `
        ${temperature}K = ${kelvinToCelsius(temperature).toFixed(2)}°C,
        ${kelvinToFahrenheit(temperature).toFixed(2)}°F
      `;
      break;

    default:
      convertedValues = 'Invalid unit!';
      break;
  }

  resultDisplay.textContent = convertedValues;
}

// Event Listener
convertBtn.addEventListener('click', convertTemperature);
