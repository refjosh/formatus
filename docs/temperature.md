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

**Return type: string**

## to Celsius

```js
const initial = 200;

// with default decimal placing
initial.kelvinToCelsius();
// result => -73.15

// with 1 decimal placing
initial.kelvinToCelsius(1);
// result => -73.1

// with no decimal placing
initial.kelvinToCelsius(0);
// result => -73
```

**Return type: string**

## to Rankine

```js
const initial = 200;

// with default decimal placing
initial.kelvinToRankine();
// result => 360
```

**Return type: string**

# Converting from Fahrenheit

## to kelvin

```js
const initial = 200;

// with default decimal placing
initial.fahrenheitToKelvin();
// result => 366.48

// with 1 decimal placing
initial.fahrenheitToKelvin(1);
// result => 366.5

// with no decimal placing
initial.fahrenheitToKelvin(0);
// result => 366
```

**Return type: string**

## to Celsius

```js
const initial = 200;

// with default decimal placing
initial.fahrenheitToCelsius();
// result => 93.33

// with 1 decimal placing
initial.fahrenheitToCelsius(1);
// result => 93.3

// with no decimal placing
initial.fahrenheitToCelsius(0);
// result => 93
```

**Return type: string**

## to Rankine

```js
const initial = 200;

// with default decimal placing
initial.fahrenheitToRankine();
// result => 659.67

// with 1 decimal placing
initial.fahrenheitToRankine(1);
// result => 659.7

// with no decimal placing
initial.fahrenheitToRankine(0);
// result => 660
```

**Return type: string**

# Converting from Celsius

## to kelvin

```js
const initial = 200;

// with default decimal placing
initial.celsiusToKelvin();
// result => 473.15

// with 1 decimal placing
initial.celsiusToKelvin(1);
// result => 473.1

// with no decimal placing
initial.celsiusToKelvin(0);
// result => 473
```

**Return type: string**

## to Fahrenheit

```js
const initial = 331;

// with default decimal placing
initial.celsiusToFahrenheit();
// result => 627.8

// with 1 decimal placing
initial.celsiusToFahrenheit(1);
// result => 627.8

// with no decimal placing
initial.celsiusToFahrenheit(0);
// result => 628
```

**Return type: string**

## to Rankine

```js
const initial = 200;

// with default decimal placing
initial.celsiusToRankine();
// result => 851.67

// with 1 decimal placing
initial.celsiusToRankine(1);
// result => 851.7

// with no decimal placing
initial.celsiusToRankine(0);
// result => 852
```

**Return type: string**

# Converting from Rankine

## to kelvin

```js
const initial = 200;

// with default decimal placing
initial.rankineToKelvin();
// result => 111.11

// with 1 decimal placing
initial.rankineToKelvin(1);
// result => 111.1

// with no decimal placing
initial.rankineToKelvin(0);
// result => 111
```

**Return type: string**

## to Fahrenheit

```js
const initial = 200;

// with default decimal placing
initial.rankineToFahrenheit();
// result => -259.67

// with 1 decimal placing
initial.rankineToFahrenheit(1);
// result => -259.7

// with no decimal placing
initial.rankineToFahrenheit(0);
// result => -260
```

**Return type: string**

## to Celsius

```js
const initial = 200;

// with default decimal placing
initial.rankineToCelsius();
// result => -162.04

// with 1 decimal placing
initial.rankineToCelsius(1);
// result => -162

// with no decimal placing
initial.rankineToCelsius(0);
// result => -162
```

**Return type: string**
