// Function for converting kelvin to Fehrenheit
const kelvinToFehrenheit = kelvin => {
  return Math.round((((kelvin - 273.15) * 9) / 5 + 32).toFixed(2));
};
// Function for converting kelvin to celcius
const kelvinToCelcius = kelvin => {
  return Math.round((kelvin - 273.15).toFixed(2));
};
