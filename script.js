document
  .getElementById("celcius-eingabefeld")
  .addEventListener("input", celsiusUmrechner);
document
  .getElementById("fahrenheit-eingabefeld")
  .addEventListener("input", fahrenheitUmrechner);
document
  .getElementById("kelvin-eingabefeld")
  .addEventListener("input", kelvinUmrechner);

function celsiusInFahrenheitUmrechnen(celsius) {
  return celsius * 1.8 + 32;
}

function celsiusInKelvinUmrechnen(celsius) {
  return celsius + 273.15;
}

function fahrenheitInCelsiusUmrechnen(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

function fahrenheitInKelvinUmrechnen(fahrenheit) {
  return (fahrenheit - 32) / 1.8 + 273.15;
}

function kelvinInCelsiusUmrechnen(kelvin) {
  return kelvin - 273.15;
}

function kelvinInFahrenheitUmrechnen(kelvin) {
  return (kelvin - 273.13) * 1.8 + 32;
}

/* Ausführung wenn man sie aufruft */
function celsiusUmrechner(event) {
  const celsius = event.target.valueAsNumber;
  document.getElementById("fahrenheit-eingabefeld").value =
    celsiusInFahrenheitUmrechnen(celsius);
  document.getElementById("kelvin-eingabefeld").value =
    celsiusInKelvinUmrechnen(celsius);
}

function fahrenheitUmrechner(event) {
  const fahrenheit = event.target.valueAsNumber;
  document.getElementById("celcius-eingabefeld").value =
    fahrenheitInCelsiusUmrechnen(fahrenheit);
  document.getElementById("kelvin-eingabefeld").value =
    fahrenheitInKelvinUmrechnen(fahrenheit);
}

function kelvinUmrechner(event) {
  const kelvin = event.target.valueAsNumber;

  document.getElementById("celcius-eingabefeld").value =
    kelvinInCelsiusUmrechnen(kelvin);
  document.getElementById("fahrenheit-eingabefeld").value =
    kelvinInFahrenheitUmrechnen(kelvin);
}
