// Require http module
const http = require('http')

// Require fs module
const fs = require('fs')

// Require minimist module (make sure you install this one via npm).
// Use minimist to process one argument `--port=` on the command line after `node server.js`.
const args = require('minimist')(process.argv.slice(2))

// Require Express.js
const express = require('express')
const app = express()

// Define allowed argument name 'port'.
args['port']

// Define a const `port` using the argument from the command line. 
// Make this const default to port 3000 if there is no argument given for `--port`.
const HTTP_PORT = args.port || process.env.PORT || 3000

// Start an app server
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});