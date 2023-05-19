# Node JWT Authentication API

This project provides a JSON Server combined with Node.js and Express 4 to create a JWT (JSON Web Token) Authentication API. It allows you to authenticate and authorize users using JWT tokens.

## Prerequisites

Before running this project, ensure that you have the following prerequisites installed on your machine:

- Node.js (https://nodejs.org)
- npm (Node Package Manager, usually installed with Node.js)

## Installation

1. Clone the repository to your local machine using the following command:

'git clone https://github.com/shakir2117/jwt-token-with-json-server.git'


2. Navigate to the project directory:

'cd node-jwt-authentication-api'


3. Install the project dependencies by running the following command:

'npm install'


## Running the JWT Authorization Module

To run the JWT Authorization module, follow these steps:

1. After installing the project dependencies, run the following command:

'npm run start'


This will start the Node.js server and you should see a message indicating that the server is running.

2. You can now send requests to the API endpoints for user authentication and authorization using JWT tokens.

## Running the JSON Server

The project also includes a JSON Server to provide a mock RESTful API for testing purposes. To run the JSON Server, follow these steps:

1. Ensure that you have completed the installation steps mentioned above.

2. In the project directory, run the following command:

'json-server --watch db.json --port 3000'


This will start the JSON Server and it will listen on port 3000 by default.

3. The JSON Server is now running, and you can make API requests to the available endpoints specified in the `db.json` file.

## License

This project is licensed under the [MIT License](LICENSE).
