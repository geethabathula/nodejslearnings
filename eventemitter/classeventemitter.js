const events = require('events');

module.exports = class extends events.EventEmitter {
    constructor() {
        super(); //calling the Event Emiiter Class
    }
}
//so as we invoked the event emitter class now in eventemitter.js
//we can directly invoke this classeventemiiter instead of
//calling events.EventEmitter()