const socketIo = require('socket.io'); // Require socket.io

module.exports.init = (server, LED) => {
  const io = socketIo(server); // Initialize Socket.IO with the server

  io.on('connection', (socket) => { // Handle WebSocket connection
    console.log('Client connected');

    socket.on('state', (data) => { // Get button state from client
      console.log(`Received state: ${data}`);
      LED.writeSync(data); // Turn LED on or off
    });

    socket.on('disconnect', () => { // Clean up on disconnect
      console.log('Client disconnected');
      LED.writeSync(0); // Ensure LED is off
    });
  });
};