// Require/import the HTTP module
var http = require("http");
// Define a port to listen for incoming requests
var PORTOne = 7000;
var PORTTwo = 7500;
// Create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Looking swell today!");
}

// Create a generic function to handle requests and responses
function handleRequestTwo(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("One of those days, eh?");
  }


// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);
// Start our server so that it can begin listening to client requests.
serverOne.listen(PORTOne, function() {

  // Log (server-side) when our server has started
  console.log("Server One is listening on: htpp://localhost" + PORTOne);
});

serverTwo.listen(PORTTwo, function() {

    // Log (server-side) when our server has started
    console.log("Server One is listening on: htpp://localhost" + PORTTwo);
  });