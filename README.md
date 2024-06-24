# Real-time-LED-control-using-Raspberry-Pi
IoT - LED Controller using Raspberry Pi 

This project presents a solution for controlling an LED via a web interface, harnessing the power of a Raspberry Pi to deliver real-time remote control capabilities. This project integrates the Raspberry Pi with an LED through GPIO pins, allowing users to turn the LED on and off seamlessly from a web browser. The system employs Node.js for the server-side application and Socket.IO for real-time, bidirectional communication between the client and the server, ensuring a responsive and efficient user experience.
The project features a simple yet effective hardware setup, including an LED connected to the GPIO pins of a Raspberry Pi. On the software side, it utilizes Node.js to run the server and Socket.IO for real-time communication between the client and the server. The modular architecture allows for easy expansion and integration of additional functionalities or devices.
The project can be expanded to control multiple devices, integrate with mobile applications, incorporate voice control, and enhance security measures. These developments could significantly broaden the system's applicability and improve user experience, paving the way for advanced IoT solutions and smart home automation.

The project's system architecture is designed to facilitate real-time communication between a web interface and a Raspberry Pi to control an LED. The architecture consists of the following main components:
•	Web Client: A web-based user interface built with HTML and JavaScript that allows users to interact with the system.
•	Web Server: A Node.js server that serves the web client and handles communication between the client and the Raspberry Pi.
•	Socket.IO: A library enables real-time, bidirectional communication between the web client and the server.
•	Raspberry Pi: A small, affordable computer that controls the GPIO pins.
•	LED: An LED connected to the GPIO pin of the Raspberry Pi, which will be controlled through the web interface.

The hardware components used in this project are as follows:
•	Raspberry Pi: A Raspberry Pi Model 4 is used as the main controller for the project. It runs the web server and controls the GPIO pins.
•	LED: A standard light-emitting diode (LED) is used as the output device.
•	Resistor: A 220-ohm resistor limits the current flowing through the LED to prevent damage.
•	Breadboard and Jumper Wires: These are used to connect the LED and resistor to the GPIO pins of the Raspberry Pi.

The software components used in this project include:
•	Node.js: A JavaScript runtime used to create the web server.
•	Socket.IO: A library enables real-time communication between the web server and the web client. 
•	onoff: A Node.js package controls the GPIO pins on the Raspberry Pi.
•	HTML/CSS/JavaScript: Used to create the web client interface.

The workflow of the LED Control system is as follows:
•	User Interaction: The user accesses the web client through a browser. The Node.js web server running on the Raspberry Pi serves the web client.
•	Control Interface: The web client provides a control interface where the user can turn the LED on or off.
•	Real-Time Communication: When the user interacts with the control interface (e.g., clicking a button to turn the LED on or off), a message is sent to the web server via Socket.IO.
•	GPIO Control: The web server receives the message and uses the `onoff` library to control the GPIO pin connected to the LED.
•	LED Response: The GPIO pin is set high or low based on the user's input, turning the LED on or off accordingly.

The first step involves setting up the circuit. Begin by inserting the LED into the breadboard. Connect the LED's anode (longer leg) to GPIO Pin 4 on the Raspberry Pi and the cathode (shorter leg) to one end of the resistor. Finally, connect the other end of the resistor to a ground (GND) pin on the Raspberry Pi. This setup ensures the LED can be controlled via the Raspberry Pi GPIO pins.
   <img width="274" alt="image" src="https://github.com/Aditisarraf/Real-time-LED-control-using-Raspberry-Pi/assets/97784382/4be0203c-e07d-4a7c-9694-c147415a858c">

This follows the software setup :
•	Update the package list: ‘sudo apt update’
•	Install Node.js: ‘sudo apt install nodejs’
•	Install npm (Node Package Manager): ‘sudo apt install npm’
•	Create a project directory using ‘mkdir {project name}’ and navigate to the directory using ‘cd {project name}’
•	Initialize a new Node.js project: ‘npm init -y’
•	Install onoff for GPIO control: ‘npm install onoff’
•	Install socket.io for real-time communication: ‘npm install socket.io@{compatible version}’.The version used in the project is 2.0.3 .
After the installation is completed start working on the code, it involves creating and configuring several files.
•	index.html: This file contains the HTML code for the web interface that controls the LED. It includes buttons to turn the LED on and off. The HTML file also includes JavaScript code to connect with the server using Socket.IO and send commands to control the LED.
•	server.js: This file creates a Node.js server using the http module. It serves the index.html file to clients requesting the root URL (/). The server also initializes Socket.IO to handle WebSocket connections and forwards LED control commands received from clients to the GPIO pin of the Raspberry Pi.
•	socketHandler.js: This file exports a function that initializes Socket.IO and handles WebSocket connections. It listens for client state messages and controls the LED based on the received commands. Additionally, it ensures that the LED is turned off when a client disconnects from the server.
After setting up the files, run the server using Node.js. This starts the server and allows clients to connect to the web interface. The browser then can be accessed by typing {Router’s IP}:{Port number}.
This setup enables real-time communication between the web interface and the Raspberry Pi, allowing users to control the LED remotely over the network.
