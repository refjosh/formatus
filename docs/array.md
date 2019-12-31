# [formatus](../README.md)

# Array Documentation

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
