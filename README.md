# formatus

![GitHub package.json version](https://img.shields.io/github/package-json/v/joshtru/formatus?color=red)
![npm](https://img.shields.io/npm/dw/formatus)
![GitHub repo size](https://img.shields.io/github/repo-size/joshtru/formatus)
![NPM](https://img.shields.io/npm/l/formatus)

> Do more write less

# Table of Contents

1. [Why formatus](#)
2. [Installation](#Installation)
3. [Basic Usage](#how-to-use)
   - [For Temperature](#for-temperature)
   - [For Numbers](#for-numbers)
4. [License](#License)

# Installation

Using npm:

```bash
$ npm install formatus
$ npm install --save formatus
```

# Why Formatus

There are snippets of code we keep writing everytime we want to create one tiny or huge app. Why keep repeating this snippets when you can get them all from one place? This is what formatus hopes to accomplish.

# How To Use

First, import the package into the JavaScript file:

```js
// importing formatus.
const formatus = require("formatus");
// or
const _ = require("formatus");
// either way works
```

### For Temperature

The 4 supported temperature scales for conversion are **Celcius, Kelvin, Fehrenheit, and Rankine**.

Here is an example of how to convert between the 4

```js
// From Kelvin to Celcius
const temp = 200;
// Conver from kelvin to celcius
const newTemp = temp.kelvinToCelcius();
// result => -73.15

// To convert back to celcius
newTemp.celciusToKelvin();
// result => 200
```

Pls note: The value returned always a string
By default, the number of digit after the decimal point is always 2.

You can specify how many number of digit after the decimal you want by passing it in the function.

#### Example

```js
// From Kelvin to Celcius
const temp = 200;

// One decimal place
temp.kelvinToCelcius(1);
// result => -73.1

// Integer
temp.kelvinToCelcius(0);
// result => -73
```

Also, checkout the documention on [Temperature API](./docs/temperature.md)

# License

MIT
