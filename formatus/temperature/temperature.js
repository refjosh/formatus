// FUNCTION FOR CONVERTING KELVIN
// to Fehrenheit
module.exports = Number.prototype.kelvinToFahrenheit = function(fix = 2) {
  const kelvin = this;
  const convertedToFeh = ((kelvin - 273.15) * 9) / 5 + 32;
  return parseFloat(convertedToFeh.toFixed(fix));
};
// to Celsius
module.exports = Number.prototype.kelvinToCelsius = function(fix = 2) {
  const kelvin = this;
  const convertedToCel = kelvin - 273.15;
  return parseFloat(convertedToCel.toFixed(fix));
};
// to Rankine
module.exports = Number.prototype.kelvinToRankine = function(fix = 2) {
  const kelvin = this;
  const convertedToRan = (kelvin * 9) / 5;
  return parseFloat(convertedToRan.toFixed(fix));
};

// FUNCTION FOR CONVERTING FAHRENHEIT
// to Kelvin
module.exports = Number.prototype.fahrenheitToKelvin = function(fix = 2) {
  const fahrenheit = this;
  const convertedToKel = ((fahrenheit + 459.67) * 5) / 9;
  return parseFloat(convertedToKel.toFixed(fix));
};
// to Celsius
module.exports = Number.prototype.fahrenheitToCelsius = function(fix = 2) {
  const fahrenheit = this;
  const convertedToCel = ((fahrenheit - 32) * 5) / 9;
  return parseFloat(convertedToCel.toFixed(fix));
};
// to Rankine
module.exports = Number.prototype.fahrenheitToRankine = function(fix = 2) {
  const fahrenheit = this;
  const convertedToRan = fahrenheit + 459.67;
  return parseFloat(convertedToRan.toFixed(fix));
};

// FUNCTION FOR CONVERTING CELSIUS
// to Kelvin
module.exports = Number.prototype.celciusToKelvin = function(fix = 2) {
  const celcius = this;
  const convertedToKel = celcius + 273.15;
  return parseFloat(convertedToKel.toFixed(fix));
};
// to Fahrenheit
module.exports = Number.prototype.celciusToFahrenheit = function(fix = 2) {
  const celcius = this;
  const convertedToFeh = (celcius * 9) / 5 + 32;
  return parseFloat(convertedToFeh.toFixed(fix));
};
// to Rankine
module.exports = Number.prototype.celciusToRankine = function(fix = 2) {
  const celcius = this;
  const convertedToRan = ((celcius + 273.15) * 9) / 5;
  return parseFloat(convertedToRan.toFixed(fix));
};

// FUNCTION FOR CONVERTING RANKINE
// to Kelvin
module.exports = Number.prototype.rankineToKelvin = function(fix = 2) {
  const rankine = this;
  const convertedToKel = (rankine * 5) / 9;
  return parseFloat(convertedToKel.toFixed(fix));
};
// to Celsius
module.exports = Number.prototype.rankineToCelsius = function(fix = 2) {
  const rankine = this;
  const convertedToCel = ((rankine - 491.67) * 5) / 9;
  return parseFloat(convertedToCel.toFixed(fix));
};
// to Fahrenheit
module.exports = Number.prototype.rankineToRankine = function(fix = 2) {
  const rankine = this;
  const convertedToFeh = (rankine = 459.67);
  return parseFloat(convertedToFeh.toFixed(fix));
};
