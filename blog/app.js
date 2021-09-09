// import express server第三方模块
const express = require('express');
// setup applicaiton第三方模块
const app = express();
// operate on path information
const path = require('path');
// import bodyparser第三方模块
const bodyParser = require('body-parser');
// 导入session模块 
const session = require('express-session');
// 导入dateFormat第三方模块
const dateFormat = require('dateformat');
// art-template第三方模块
const template = require('art-template');
// import morgan第三方模块
const morgan = require('morgan');
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

//使用process对象
// 获取系统的环境变量
// 1.生产环境参考命令-- -> NODE_ENV=production nodemon app.js
// 2.开发环境参考命令-- -> NODE_ENV=development nodemon app.js

// ps：这里用node和nodemon都可以，node的话不会在保存js文件的时候重启服务
console.log("当前环境变量~", process.env.NODE_ENV)
if (process.env.NODE_ENV == "development") {
    console.log("=====当前是开发环境=====");
    // 在开发环境中将客户端发送的服务器请求信息打印到控制台中
    // GET / admin / login 200 6.755 ms - 2584
    // GET / admin / lib / bootstrap / css / bootstrap.min.css 304 2.183 ms - -
    // GET / admin / css / base.css 304 1.936 ms - -
    // GET / admin / lib / bootstrap / js / bootstrap.min.js 304 0.880 ms - -
    // GET / admin / lib / jquery / dist / jquery.min.js 304 0.738 ms - -
    // GET / admin / js / common.js 304 1.666 ms - -
    app.use(morgan('dev'));
} else {
    console.log("=====当前是生产环境=====");

}
// 
// console.log("当前环境变量~", process.env)
// 参考命令--->NODE_ENV=production node app.js
// 参考命令--->NODE_ENV=development node app.js
// =============================================================================
// tell express about the template path
app.set('views', path.join(__dirname, 'views'));
// telll express about the template tail
app.set('view engine', 'art');
// what temolate engine is used
// 下载这个的时候art-template也顺便下载好了
app.engine('art', require('express-art-template'));
// 向模板中导入外部变量
// 这样就可以直接在模板中使用这个变量了
template.defaults.imports.dateFormat = dateFormat;

// =============================================================================
// expose stastic file
app.use(express.static(path.join(__dirname, 'public')));
// diffenencialize presentation and management pages
// const home = require('./route/home.js');
// const admin = require('./route/admin.js');
// configure use midlleware
// guard function
app.use('/admin', require('./middleware/loginGuard.js'));
// configure use midlleware
app.use('/home', require('./route/home.js'));
app.use('/admin', require('./route/admin.js'));


// 错误处理中间件    
app.use((err, req, res, next) => {
    console.log("触发错误处理中间件");
    // 将字符串转换为对象类型
    // JSON。pars():
    const result = JSON.parse(err);
    // res.redirect(`/admin/user-edit?message=${e.message}`);
    // res.redirect(`${result.path}?message=${result.message}`);

    // let obj = { path: '/admin/user-edit', message: "密码错误无法进行密码修改", id: id };
    // next(JSON.stringify(obj))
    let params = [];
    for (let attr in result) {
        if (attr != 'path') {
            params.push(attr + '=' + result[attr]);
        };
    }
    res.redirect(`${result.path}?${params.join('&')}`);
})
// Listen to the port number
// when the application is deploye on the server it should be 80
app.listen(3000);
console.log("Server Started, please access localhost")
// access link
// http://localhost:3000/123/login
// http://localhost:3000/admin/login