const userCustomEventClass = require('./classeventemitter');

const customEmitter = new userCustomEventClass();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('customevent', (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('customevent', () => {
    console.log('some other logic here')
})

customEmitter.emit('customevent', 'geetha', 24)

module.exports = customEmitter;