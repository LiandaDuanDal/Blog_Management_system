// import mongoose package
const mongoose = require('mongoose');
// connect
// 加入鉴权信息用户名 itcast 密码itcst
mongoose.connect('mongodb://itcast:itcast@localhost/blog')
    .then(() => { console.log('connected to the databaese') })
    .catch(() => { console.log('Fail to connect to the databaese') })
