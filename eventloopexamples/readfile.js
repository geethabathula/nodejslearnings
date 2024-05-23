const fs = require('fs');
const path = require('path');



//STORED - 2ND PHASE
const eventloop = fs.readFile('../content/first.txt', () => {
    console.log('File read complete!');

    //STORED IN - 1ST PHASE
    setTimeout(() => {
        console.log('Timer callback executed')
    }, 0);

    //STORED IN - 3RD PHASE
    setImmediate(() => { console.log('SetImmediate callback executed') });

    process.nextTick(() => { console.log('Process.nextTick callback executed') })
})

console.log('Program has completed')
module.exports = eventloop;