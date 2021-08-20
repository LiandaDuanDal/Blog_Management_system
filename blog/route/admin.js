// import express server
const express = require('express');
// setup applicaiton
const admin = express();
// import user.js   
// 解构出User
const { User } = require('../model/user.js');
// 
const bcrypt = require('bcrypt');
// get
admin.get('/login', require('./admin/loginPage.js'));
admin.get('/user', require('./admin/userPage.js'));

admin.get('/list', (req, res) => {
    console.log("admin get ---admin/list.art---called")
    res.render('admin/user-edit.art');
    // res.render('admin/artical.art')
});
// process login
// use bodyparser
admin.post('/login', require('./admin/login.js'));
admin.get('/logout', require('./admin/logout.js'));
module.exports = admin

