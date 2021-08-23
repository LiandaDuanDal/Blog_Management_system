// import express server
const express = require('express');
// setup applicaiton
const app = express();
// operate on path information
const path = require('path');
// import bodyparser
const bodyParser = require('body-parser');
// 导入session模块 
const session = require('express-session');
// =============================================================================
// connect to the database
require('./database/connect.js');
// process post paramneter
// 推荐使用false 如果为true会使用系统内置模块处理
app.use(bodyParser.urlencoded({ extended: false }));
// 
app.use(session({ secret: 'my-own-secretkey' }));
// import and setup user
require('./model/user.js');
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
// guard function
app.use('/admin', require('./middleware/loginGuard.js'));
// configure use midlleware
app.use('/home', home);
app.use('/admin', admin);


// 错误处理中间件    
app.use((err, req, res, next) => {
    console.log("触发错误处理中间件");
    // 将字符串转换为对象类型
    // JSON。pars():
    const result = JSON.parse(err);
    // res.redirect(`/admin/user-edit?message=${e.message}`);
    res.redirect(`${result.path}?message=${result.message}`);
})



// Listen to the port number
// when the application is deploye on the server it should be 80
app.listen(3000);
console.log("Server Started, please access localhost")
// access link
// http://localhost:3000/admin/login
// http://localhost:3000/123/login