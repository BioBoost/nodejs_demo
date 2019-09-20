const Ticker = require('./ticker');

let ticker = new Ticker();

ticker.on('second', (event) => {
    console.log(JSON.stringify(event));
});

ticker.on('minute', (event) => {
    console.log(JSON.stringify(event));
});