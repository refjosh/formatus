# [formatus](../README.md)

# Temperature Documentation

To convert any value to another scale, the value has to be a number. The number of decimal places can be provided by passing the value into the function or **relying on the default placing, which is 2 decimal places.**

The Return value is always a string.

# Before Use

```js
const _ = require("formatus");
```

1. [Converting from Kelvin](#converting-from-kelvin)
2. [Converting from Fahrenheit](#converting-from-fahrenheit)
3. [Converting from Celsius](#converting-from-celcius)
4. [Converting from Rankine](#converting-from-rankie)

# Converting from Kelvin

## to fahrenheit

```js
const initial = 200;

// with default decimal placing
initial.kelvinToFahrenheit();
// result => 3140.33

// with 1 decimal placing
initial.kelvinToFahrenheit(1);
// result => 3140.3

// with no decimal placing
initial.kelvinToFahrenheit(0);
// result => 3140
```

## to Celsius

```js
const initial = 200;

initial.kelvinToCelcius();
```

## to Celsius

```js
const initial = 200;

initial.kelvinToCelcius();
```
