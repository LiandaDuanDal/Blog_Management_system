// import express server
const express = require('express');
// setup applicaiton
const home = express();
// get
home.get('/', (req, res) => {
    res.send('Welcome to the main page for presentation');
});


module.exports = home

