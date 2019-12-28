// Function for converting kelvin to Fehrenheit
const kelvinToFehrenheit = kelvin => {
  return Math.round((((kelvin - 273.15) * 9) / 5 + 32).toFixed(2));
};
// Function for converting kelvin to celcius
const kelvinToCelcius = kelvin => {
  return Math.round((kelvin - 273.15).toFixed(2));
};
// Function for formating number
const formatNumber = num => {
  if (num < 1000) return num.toString();
  let value = num.toString().split("");
  let count = 0;
  let newNumber = [];
  for (let i = value.length - 1; i >= 0; i--) {
    if (count === 3) {
      newNumber.push(",");
      count = 0;
    }
    count += 1;
    newNumber.push(value[i]);
  }
  return newNumber.reverse().join("");
};
module.exports = formatus = {
  kelvinToFehrenheit: kelvinToFehrenheit,
  kelvinToCelcius: kelvinToCelcius,
  formatNumber: formatNumber
};
