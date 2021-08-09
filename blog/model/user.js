// import mongoose
const mongoose = require('mongoose');
// 
const bcrypt = require('bcrypt');

// async function run() {
//     const salt = await bcrypt.genSalt(10);
//     console.log("salt------>", salt);
//     const plain_text = "12345678";
//     console.log("plain_text---->", plain_text);
//     const encryptPassword = await bcrypt.hash(plain_text, salt);
//     console.log("加密之后--->", encryptPassword)
// }
async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const plain_text = "12345678";
    const encryptPassword = await bcrypt.hash(plain_text, salt);
    const user = await User.create({
        username: 'duanlianda',
        email: 'ln387408@dal.ca',
        password: encryptPassword,
        role: 'admin',
        state: 0
    });
}
// 
// createUser();
// 
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
    // admin
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
const User = mongoose.model('User', userSchema);
// ==================================
// create a user to test login
// User.create({
//     username: 'duanlianda',
//     email: 'ln387408@dal.ca',
//     password: '12345678',
//     role: 'admin',
//     state: 0
// })
//     .then(() => { console.log("用户创建成功"); })
//     .catch((err) => { console.log("用户创建失败"); })

// ==================================
// expose the use schema
// module.exports = user;
// 将用户作为模块成员进行导出，将来可能还要导出其他的东西
console.log("导入用户模型~~~~");

module.exports = {
    User
}