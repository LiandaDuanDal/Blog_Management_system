// import express server
const express = require('express');
// setup applicaiton
const admin = express();
// get
admin.get('/login', (req, res) => {
    // res.send('Welcome to the main page for admin');
    console.log("admin get ---admin/login.art---called")
    res.render('admin/login.art');
});


module.exports = admin

