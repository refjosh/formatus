// FUNCTION TO FORMAT NUMBER
// with comma
module.exports = Number.prototype.withComma = function() {
  const num = this;
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
// with suffix
module.exports = Number.prototype.withSuffix = function(fix) {
  const number = this;
  if (number < 1e3) return number.toString();
  if (number >= 1e3 && number < 1e6) return (number / 1e3).toFixed(fix) + "K";
  if (number >= 1e6 && number < 1e9) return (number / 1e6).toFixed(fix) + "M";
  if (number >= 1e9 && number < 1e12) return (number / 1e9).toFixed(fix) + "B";
  if (number >= 1e12 && number < 1e15)
    return (number / 1e12).toFixed(fix) + "T";
  if (number >= 1e15 && number < 1e18)
    return (number / 1e15).toFixed(fix) + "P";
  if (number >= 1e18 && number < 1e21)
    return (number / 1e18).toFixed(fix) + "E";
  if (number >= 1e21 && number < 1e24)
    return (number / 1e21).toFixed(fix) + "Z";
  if (number >= 1e24 && number < 1e27)
    return (number / 1e24).toFixed(fix) + "Y";
  else return (number / 1e24).toFixed(fix) + "Y+";
};
