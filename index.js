// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log('Hello!');
  } sayHello(); 

  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  } 

  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  } 

  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  } 
  
  sayHelloToIsabel()
  sayHelloToSofia()
  sayHelloToBrendan()

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  } 
  say("Julio", "hello"); 