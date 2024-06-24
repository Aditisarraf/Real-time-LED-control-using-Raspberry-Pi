# Real-time-LED-control-using-Raspberry-Pi
IoT - LED Controller using Raspberry Pi 

1. Executive Summary
This project presents a solution for controlling an LED via a web interface, harnessing the power of a Raspberry Pi to deliver real-time remote control capabilities. This project integrates the Raspberry Pi with an LED through GPIO pins, allowing users to turn the LED on and off seamlessly from a web browser. The system employs Node.js for the server-side application, along with Socket.IO for real-time, bidirectional communication between the client and the server, ensuring a responsive and efficient user experience.
The project features a simple yet effective hardware setup, including an LED connected to the GPIO pins of a Raspberry Pi. On the software side, it utilizes Node.js to run the server and Socket.IO for real-time communication between the client and the server. The modular architecture allows for easy expansion and integration of additional functionalities or devices.
Looking forward, the project can be expanded to control multiple devices, integrate with mobile applications, incorporate voice control, and enhance security measures. These developments could significantly broaden the system's applicability and improve user experience, paving the way for advanced IoT solutions and smart home automation.

2. Introduction
In today's fast-paced world, real-time control of devices over the internet has become a critical aspect of many applications, ranging from home automation to industrial systems. The ability to remotely control and monitor devices not only enhances convenience but also improves efficiency and safety. This project leverages modern web technologies to enable real-time control of an LED using a Raspberry Pi, facilitating an understanding of how such systems can be implemented and utilized in various scenarios.
The primary objective of this project is to develop a system that allows real-time control of an LED connected to a Raspberry Pi using a web interface. The project aims to demonstrate the integration of web technologies with hardware to achieve seamless communication and control.
This project is significant as it provides a practical example of how the Internet of Things (IoT) can be implemented using affordable and readily available hardware. By understanding the principles and methodologies involved, similar techniques can be applied to a wide range of applications, including home automation, remote monitoring, and industrial automation.

3. Project Description
3.1 System Architecture
The system architecture of the project is designed to facilitate real-time communication between a web interface and a Raspberry Pi to control an LED. The architecture consists of the following main components:
•	Web Client: A web-based user interface built with HTML and JavaScript that allows users to interact with the system.
•	Web Server: A Node.js server that serves the web client and handles communication between the client and the Raspberry Pi.
•	Socket.IO: A library used to enable real-time, bidirectional communication between the web client and the server.
•	Raspberry Pi: A small, affordable computer used to control the GPIO pins.
•	LED: An LED connected to the GPIO pin of the Raspberry Pi, which will be controlled through the web interface.
3.2 Hardware Components
The hardware components used in this project are as follows:
•	Raspberry Pi: A Raspberry Pi Model 4 is used as the main controller for the project. It runs the web server and controls the GPIO pins.
•	LED: A standard light-emitting diode (LED) is used as the output device.
•	Resistor: A 220-ohm resistor is used to limit the current flowing through the LED to prevent damage.
•	Breadboard and Jumper Wires: Used to connect the LED and resistor to the GPIO pins of the Raspberry Pi.
3.3 Software Components
The software components used in this project include:
•	Node.js: A JavaScript runtime used to create the web server.
•	Socket.IO: A library used to enable real-time communication between the web server and the web client. 
•	onoff: A Node.js package used to control the GPIO pins on the Raspberry Pi.
•	HTML/CSS/JavaScript: Used to create the web client interface.
3.4 Workflow
The workflow of the LED Control system is as follows:
•	User Interaction: The user accesses the web client through a browser. The web client is served by the Node.js web server running on the Raspberry Pi.
•	Control Interface: The web client provides a control interface where the user can turn the LED on or off.
•	Real-Time Communication: When the user interacts with the control interface (e.g., clicking a button to turn the LED on or off), a message is sent to the web server via Socket.IO.
•	GPIO Control: The web server receives the message and uses the `onoff` library to control the GPIO pin connected to the LED.
•	LED Response: The GPIO pin is set high or low based on the user's input, turning the LED on or off accordingly.

4. Implementation
The first step involves setting up the circuit. Begin by inserting the LED into the breadboard. Connect the anode (longer leg) of the LED to GPIO Pin 4 on the Raspberry Pi, and the cathode (shorter leg) to one end of the resistor. Finally, connect the other end of the resistor to a ground (GND) pin on the Raspberry Pi. This setup ensures the LED can be controlled via the GPIO pins of the Raspberry Pi.
 <img width="274" alt="image" src="https://github.com/Aditisarraf/Real-time-LED-control-using-Raspberry-Pi/assets/97784382/4be0203c-e07d-4a7c-9694-c147415a858c">

Figure 1: Circuit Diagram
This follows the software setup :
•	Update the package list: ‘sudo apt update’
•	Install Node.js: ‘sudo apt install nodejs’
•	Install npm (Node Package Manager): ‘sudo apt install npm’
•	Create a project directory using ‘mkdir {project name}’ and navigate to the directory using ‘cd {project name}’
•	Initialize a new Node.js project: ‘npm init -y’
•	Install onoff for GPIO control: ‘npm install onoff’
•	Install socket.io for real-time communication: ‘npm install socket.io@{compatible version}’.The version used in the project is 2.0.3 .
After the installation is completed start working on the code, it involves creating and configuring several files.
•	index.html: This file contains the HTML code for the web interface used to control the LED. It includes buttons to turn the LED on and off. The HTML file also includes JavaScript code to establish a connection with the server using Socket.IO and send commands to control the LED.
•	server.js: This file creates a Node.js server using the http module. It serves the index.html file to clients requesting the root URL (/). The server also initializes Socket.IO to handle WebSocket connections and forwards LED control commands received from clients to the GPIO pin of the Raspberry Pi.
•	socketHandler.js: This file exports a function that initializes Socket.IO and handles WebSocket connections. It listens for state messages from clients and controls the LED based on the received commands. Additionally, it ensures that the LED is turned off when a client disconnects from the server.
After setting up the files, run the server using Node.js. This starts the server and allows clients to connect to the web interface. The browser then can be accessed by typing {Router’s IP}:{Port number}.
This setup enables real-time communication between the web interface and the Raspberry Pi, allowing users to control the LED remotely over the network.

5. Result
The project demonstrated robust functionality, reliability, and real-time responsiveness. The system successfully allows users to control the LED remotely through a web interface, with minimal latency and consistent performance. The system exhibited stable communication between the web interface, server, and Raspberry Pi, ensuring a seamless user experience. Overall, the results validate the project's effectiveness in achieving its objectives and underscore its potential for practical applications in IoT and remote control systems.

6. Future Scope
This project offers a solid foundation for further enhancements and expansions, paving the way for a wide range of future applications and developments:
•	Expanded Device Control: Extend the system to control multiple LEDs or other devices, such as motors, sensors, and cameras, by integrating additional GPIO pins and implementing more sophisticated control logic.
•	Mobile App Integration: Develop mobile applications for Android and iOS platforms to provide users with more convenient and accessible control options, enhancing the user experience.
•	Remote Access and Cloud Integration: Integrate cloud services to enable remote access and control over the internet, allowing users to manage their devices from anywhere in the world. This could involve using platforms like AWS IoT, Google Cloud IoT, or Microsoft Azure IoT.
•	Integration with Home Automation Systems: Integrate the system with existing home automation platforms like Home Assistant, SmartThings, or OpenHAB to provide users with a more comprehensive and interconnected smart home experience.
