const events = require('events');
const emitter = new events.EventEmitter();
const test = () => console.log('test');
emitter.on('test', function () {
    test();
    emitter.on('test', test);
})

emitter.emit('test');
emitter.emit('test');
emitter.emit('test');