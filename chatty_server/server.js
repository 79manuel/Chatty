const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws');
const uuidV4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });


// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.broadcast = function broadcast(data) {
  console.log("in broadcast",data);
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (ws) => {
  console.log('Client connected');


  ws.on('message', function incoming(message) {
    var incomingMsg = message;
    incomingMsg.id = uuidV4();
    var outGoingMsg = incomingMsg;
    console.log('ws message received: %s', JSON.parse(message).content);
    wss.broadcast(outGoingMsg);

  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
