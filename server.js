// Require http module
const http = require('http')

// Require fs module
const fs = require('fs')

// Require minimist module
// Use minimist to process one argument `--port=` on the command line after `node server.js`.
const args = require('minimist')(process.argv.slice(2))

// Require Express.js
const express = require('express')
const app = express()

// Define allowed argument name 'port'.
args['port']

// Define a const `HTTP_PORT` using the argument from the command line.
const HTTP_PORT = args.port || process.env.PORT || 3000

// Start an app server
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});

// Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});

// Define check endpoint
app.get('/app/', (req, res) => {
    // Respond with status 200
        res.statusCode = 200;
    // Respond with status message "OK"
        res.statusMessage = 'OK';
        res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' +res.statusMessage)
});

