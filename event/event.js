const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', function() {
  console.log('A scream is detected!');
});

eventEmitter.on('data', function() {
    console.log('A data is detected!');
});
  
eventEmitter.emit('scream');
eventEmitter.emit('data');