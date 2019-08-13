/**
 * Author:		Usama Guenedi
 * File name: 	server.js
 * Version:		1.0
 * Date:		01.03.2019
 * Description:	Loads all necessary files and starts the insatce.
 * 						
 */

// Loading module 'express'. Express is a light-weight web application framework to help organize your web application into an MVC architecture on the server side
const EXPRESS = require('express')
// Loading module 'body-perser', used to analyse the entrie body portion of an incoming request stream and exposes it on req.body 
const BODY_PARSER = require('body-parser')
// Loading module 'cors'. A web application makes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin
const CORS = require('cors')
// Loading module 'morgan'. Morgan is another HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application
const MORGAN = require('morgan')
// Loading file 'config', used for MySQL query building
const CONFIG = require('./conf/config')

// Defines the variable "APP" with the function "EXPRESS()"
const APP = EXPRESS()

// This tells express to log via morgan and morgan to log in the "combined" pre-defined format
APP.use(MORGAN('combined'))
APP.use(BODY_PARSER.json())
APP.use(CORS())

// "require" is a built-in function with a special purpose: to load modules
require('./security/passport')
require('./routes')(APP)

// Imports verbose Logging dependency
if (process.env.NODE_ENV !== 'production'){
    require('longjohn');
}
// Chatches the ldap error recieves from the AD server
process.on('uncaughtException', function (err) {
    console.error(err.stack);
    console.log("Node NOT Exiting...")
})

// Makes the server listen on the pre-configured port
APP.listen(CONFIG.port, console.log('Server Started!'))