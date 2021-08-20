// 引入joi模块做规则验证
const Joi = require('joi');

module.exports = async (req, res) => {
    // res.send('ok');
    // 接收客户端传过来的参数
    // res.send(req.body);
    // 使用第三方模块进行格式验证
    const validationSchema = Joi.object({
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证--自定义提示')),
        email: Joi.string().email().required().error(new Error('email不符合验证--自定义提示')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('password不符合验证--自定义提示')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('role不符合验证--自定义提示')),
        state: Joi.number().valid(0, 1).required().error(new Error('state不符合验证--自定义提示')),

    });
    // 异步函数只能在async中使用

    // You fix it by changing joi.validate(request, validationSchema to validationSchema.validate(request As 
    // joi.validate() is no longer supported in v16.It is clearly documented in the API docs and release notes.
    // https://github.com/sideway/joi/issues/2145
    // https://joi.dev/api/?v=17.4.2

    try {
        // 
        console.log("进入Joi比对程序");
        // 新版的Joi验证接口有变化
        // 官方文档连接:https://joi.dev/api/?v=17.4.2
        await validationSchema.validateAsync(req.body);
    } catch (e) {
        // 验证没有通过
        // res.send(e.message);
        res.redirect(`/admin/user-edit?message=${e.message}`);
    }

};


// {
//     "username": "student",
//         "email": "duanliandag@gmail.com",
//             "password": "12345678",
//                 "role": "normal",
//                     "state": "0"
// }