// FUNCTION FOR CONVERTING
// kelvin to Fehrenheit
module.exports = Number.prototype.kelvinToFahrenheit = function(fix = 2) {
  const kelvin = this;
  const convertedToFeh = ((kelvin - 273.15) * 9) / 5 + 32;
  const covertedToString = convertedToFeh.toFixed(fix);
  console.log(covertedToString);
  return parseFloat(covertedToString);
};
// kelvin to celcius
module.exports = Number.prototype.kelvinToCelcius = (fix = 2) => {
  const kelvin = this;
  const convertedToCel = Math.round(kelvin - 273.15);
  const covertedToString = convertedToCel.toFixed(fix);
  return parseFloat(covertedToString);
};
// kelvin to
