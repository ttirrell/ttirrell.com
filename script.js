// Define a global namespace object to avoid polluting the global scope
var StaticWebApp = StaticWebApp || {};

// Use an immediately-invoked function expression (IIFE) to encapsulate your code
(function() {
  "use strict"; // Use strict mode to avoid common errors

  // Define some constants or variables that you need
  var PI = Math.PI;
  var message = "Hello World!";

  // Define some functions that you need
  function square(x) {
    return x * x;
  }

  function greet(name) {
    console.log(message + " " + name);
  }

  // Expose some properties or methods to the global namespace object
  StaticWebApp.PI = PI;
  StaticWebApp.square = square;
  StaticWebApp.greet = greet;

})();

// Use the global namespace object to access your properties or methods
console.log(StaticWebApp.PI); // Prints 3.141592653589793
console.log(StaticWebApp.square(5)); // Prints 25
StaticWebApp.greet("John"); // Prints Hello World! John