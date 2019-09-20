const myObject = {
  name: 'My Test Object',
  createAnonymFunction: function() {
    return function() {
      console.log(this.name);
      console.log(arguments);
    };
  },

  createArrowFunction: function() {
    return () => {
      console.log(this.name);
      console.log(arguments);
    };
  }
};

const anon = myObject.createAnonymFunction('hello', 'world');
const arrow = myObject.createArrowFunction('hello', 'world');

console.log("Anonymous:");
anon();

console.log("\r\nArrow:");
arrow();