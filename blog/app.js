// import express server
const express = require('express');
// setup applicaiton
const app = express();
// operate on path information
const path = require('path');
// =============================================================================
// tell express about the template path
app.set('views', path.join(__dirname, 'views'));
// telll express about the template tail
app.set('view engine', 'art');
// what temolate engine is used
app.engine('art', require('express-art-template'));

// =============================================================================
// expose stastic file
app.use(express.static(path.join(__dirname, 'public')));
// diffenencialize presentation and management pages
const home = require('./route/home.js');
const admin = require('./route/admin.js');
// configure use midlleware
app.use('/home', home);
app.use('/admin', admin);



// Listen to the port number
// when the application is deploye on the server it should be 80
app.listen(3000);
console.log("Server Started, please access localhost")