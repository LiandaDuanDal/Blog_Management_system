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
// 创建用户编辑页面路由
admin.get('/user-edit', require('./admin/user-edit.js'));
//  创建登录路由
admin.post('/login', require('./admin/login.js'));
// 创建退出登录路由
admin.get('/logout', require('./admin/logout.js'));
// 创建实现用户添加功能路由
admin.post('/user-edit', require('./admin/user-edit-fn.js'));
module.exports = admin

