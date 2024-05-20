const { add, sub } = require('./nodelearnings/calc.js');
console.log(add(3, 4));
console.log(sub(4, 3));


/**
//Default Export and Import Examples
const names = require('./nodelearnings/names');
const hiFunc = require('./nodelearnings/utils')
const items = require('./nodelearnings/items');
console.log(items);
console.log(items.items[0], items.user.age);
hiFunc(names.john);
hiFunc(names.peter);
hiFunc("susan berry");

// console.log(module);
 */
