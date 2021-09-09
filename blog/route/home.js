// import express server
const express = require('express');
// setup applicaiton
const home = express.Router();
// get
home.get('/', require('./home/index.js'));
// 博客前台文章详情展示页面
home.get('/article', require('./home/article.js'));
// 创建评论功能路由
home.post('/comment', require('./home/comment.js'));
module.exports = home

