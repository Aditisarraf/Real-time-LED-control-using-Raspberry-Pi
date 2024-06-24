const Gpio = require('onoff').Gpio; // Require onoff to control GPIO
const fs = require('fs'); // Require filesystem to read html files
const http = require('http'); // Require http to create a web server
const socketHandler = require('./socketHandler'); // Import socketHandler

const LED = new Gpio(4, 'out'); // Declare GPIO4 as an output

// Create server to serve the HTML file
const server = http.createServer((req, res) => {
  fs.readFile(__dirname + '/index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

// Initialize Socket.IO and pass the server object and LED instance
socketHandler.init(server, LED);

// Clean up GPIO on exit
process.on('SIGINT', () => {
  LED.writeSync(0); // Turn off LED
  LED.unexport();   // Unexport GPIO to free resources
  process.exit();   // Exit the process
});