//modules
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

console.log(data);
sayHi(names.john);
sayHi(names.peter);
sayHi("susan");

