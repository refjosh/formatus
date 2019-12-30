# formatus

![GitHub package.json version](https://img.shields.io/github/package-json/v/joshtru/formatus?color=red)
![npm](https://img.shields.io/npm/dw/formatus)
![GitHub repo size](https://img.shields.io/github/repo-size/joshtru/formatus)
![NPM](https://img.shields.io/npm/l/formatus)

> Do more without doing much

# Table of Contents

1. [Installation](#Installation)
2. [How to use](#how-to-use)

- [For Temperature](#for-temperature)
- [For Numbers](#for-numbers)

3. [License](#License)

# Installation

Using npm:

```bash
$ npm i formatus
$ npm i --save formatus
```

# How To Use

For import the package into the JavaScript file:

```JavaScript
// importing formatus.
const formatus = require('formatus');
// or
const _ = require('formatus')
// either way works
```

### For Temperature

The 4 supported temperature scales are Celcius, Kelvin, Fehrenheit, and Rankine.

Here is an example of how to convert between the 4

```JavaScript
// From Kelvin to Celcius
const kelvin = 200;
kelvin.kelvinToCelcius();
// -73.15
```

Pls note: The value returned always a string
By default, the number of digit after the decimal point is always 2.

You can specify how many numbers you want by passing a the into the function;

```JavaScript
// From Kelvin to Celcius
const kelvin = 200;
// One decimal number
kelvin.kelvinToCelcius(1);
// -73.1
// Whole number
kelvin.kelvinToCelcius(0);
// -73
```

# License

MIT
