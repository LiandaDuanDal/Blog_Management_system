// import mongoose
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxLength: 20
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    // 0:启用
    // 1：禁用
    state: {
        type: Number,
        default: 0
    }
});

// 创建集合 
const User = mongoose.model(userSchema);
// expose the use schema
// module.exports = user;
// 将用户作为模块成员进行导出，将来可能还要导出其他的东西
module.exports = {
    User
}