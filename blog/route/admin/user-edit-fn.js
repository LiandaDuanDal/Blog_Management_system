// 引入joi模块做规则验证
const Joi = require('joi');

module.exports = async (req, res) => {
    // res.send('ok');
    // 接收客户端传过来的参数
    res.send(req.body);
    // 使用第三方模块进行格式验证
    const schema = {
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证--自定义提示')),
        email: Joi.string().email().error(new Error('email不符合验证--自定义提示')),
        password: Joi.string().regex(/^[a-z]A-Z0-9{3,30}$/).required().error(new Error('password不符合验证--自定义提示')),
        role: Joi.string().valid('normal', 'admin').require().error(new Error('role不符合验证--自定义提示')),
        state: Joi.number().valid("0", "1").required().error(new Error('state不符合验证--自定义提示')),

    };
    // 异步函数只能在async中使用
    try {
        // 
        await Joi.validate(req.body, Schema);
    } catch (e) {
        // 验证没有通过
        // res.send(e.message);
        req.redirect('/admin/user-edit?message=${e.message}');
    }

};


// {
//     "username": "student",
//         "email": "duanliandag@gmail.com",
//             "password": "12345678",
//                 "role": "normal",
//                     "state": "0"
// }