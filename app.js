// const classEvent = require('./eventemitter/eventemitter.js');
// console.log(classEvent);

// const server = require('./eventemitter/servereventemitter');
// console.log(server)
/**
//For terminal ip and op

const readip = require('./terminalipop/terminalip')
 */

/**
//For EventEmitter
const emitter = require('./eventemitter/eventemitter')

console.log("Hello World")
 */

/**
//For ReadWrite with promises fsmodule
const readAndWriteFiles = require('./fsmodule/fsasync/fsasync');

readAndWriteFiles();
 */

/**
//For EventLoop
const readFile = require('./eventloopexamples/readfile');

readFile('first.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:\n', data);
    }
});
 */


// const { add, sub } = require('./nodelearnings/calc.js');
// console.log(add(3, 4));
// console.log(sub(7, 3));


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
