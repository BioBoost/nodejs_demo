// console.log(x);
// var x = 15;
// console.log(x);

// // console.log(y); // Crashes
// let y = 15;
// console.log(y);

// // Periodic
// setInterval(() => {
//     console.log("Hello");
// }, 1000);

// // 1-shot
// setTimeout(() => {
//     console.log("Bye");
// }, 2000);

const Greeter = require('./greeter');
let greeter = new Greeter('Nico');
console.log(greeter.greet());
