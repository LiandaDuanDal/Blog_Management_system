// import express server
const express = require('express');
// setup applicaiton
// 这里是个大问题！！！！！
// 之前写成const admin = express()是错误的，会导致服务器将admin定义为一个单独的应用
// 而不会跟home分router共享全局变量userInfo。
// home和admin都应该使用express.Router()进行初始化
const admin = express.Router();
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

