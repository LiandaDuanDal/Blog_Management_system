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

admin.get('/list', (req, res) => {
    console.log("admin get ---admin/list.art---called")
    res.render('admin/user-edit.art');
    // res.render('admin/artical.art')
})

module.exports = admin

