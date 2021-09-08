// import express server
const express = require('express');
// setup applicaiton
const home = express();
// get
home.get('/', require('./home/index.js'));
// 博客前台文章详情展示页面
home.get('/article', require('./home/article.js'));

module.exports = home

