// FUNCTION TO FORMAT ARRAY
// arrayWithComma
module.exports = Array.prototype.arrayWithComma = function() {
  const array = this;
  return array.map(number => number.toLocaleString("en"));
};
