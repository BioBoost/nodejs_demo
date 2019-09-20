const EventEmitter = require('events');

class Ticker extends EventEmitter {

 constructor() {
    super();
    this.seconds = 0;
    this.setup_ticker();
 }

 setup_ticker() {
     setInterval(() => {
         this.seconds++;
         this.emit('second', { seconds: this.seconds });
     
         if (this.seconds % 60 === 0) {
            this.emit('minute', { minutes: this.seconds/60 });
         }
    }, 1000);

    // setInterval(function() {
    //     this.seconds++;
    //     this.emit('second', { seconds: this.seconds });
    // }, 1000);
 }

}

module.exports = Ticker;