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
// 添加用户删除处理路由
admin.get('/delete', require('./admin/user-delete.js'));
// 创建实现用户添加功能路由
admin.post('/user-edit', require('./admin/user-edit-fn.js'));

admin.post('/user-modify', require('./admin/user-modify.js'));

// 文章列表页面路由
admin.get('/article', require('./admin/article.js'));
// 文章编辑页面路由
admin.get('/article-edit', require('./admin/article-edit.js'));
// 实现文章添加功能路由
admin.post('/article-add', require('./admin/article-add.js'));


module.exports = admin

