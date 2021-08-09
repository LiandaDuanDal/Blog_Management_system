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
admin.get('/login', (req, res) => {
    // res.send('Welcome to the main page for admin');
    console.log(req.body);
    console.log("admin get ---admin/login.art---called")
    res.render('admin/login.art');
});

admin.get('/list', (req, res) => {
    console.log("admin get ---admin/list.art---called")
    res.render('admin/user-edit.art');
    // res.render('admin/artical.art')
});
// process login
// use bodyparser
admin.post('/login', async (req, res) => {
    // res.send(req.body);
    const { email, password } = req.body;
    // if (email.trim().length == 0 || password.trim().length == 0) {
    //     return res.status(400).send('<h4>EMAIL address or password is wrong</h4>');
    // }
    // find user info
    // 如果查询到了用户 user变量的值是对象类型 对象中存储的是用户信息
    // 如果没有查询到用户，user变量为空
    let user = await User.findOne({ email });
    console.log("post 请求接收到user------>", user);
    if (user) {
        // 将客户端传递过来的密码和数据库中的密码进行比对
        let isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
            res.send('登录成功');
        } else {
            console.log("密码验证未通过");
            res.status(400).render('admin/error', { msg: '邮箱地址或者密码错误' });
        }
    } else {
        console.log("渲染出错页面");
        res.status(400).render('admin/error', { msg: '邮箱地址或者密码错误' });
    }
});
module.exports = admin

