// 引入joi模块做规则验证
const Joi = require('joi');
// 引入用户集合的构造函数
const { User, validateUser } = require('../../model/user.js');
// 引入加密模块
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    // res.send('ok');
    // 接收客户端传过来的参数
    // res.send(req.body);
    // 使用第三方模块进行格式验证
    // const validationSchema = Joi.object({
    //     username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证--自定义提示')),
    //     email: Joi.string().email().required().error(new Error('email不符合验证--自定义提示')),
    //     password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('password不符合验证--自定义提示')),
    //     role: Joi.string().valid('normal', 'admin').required().error(new Error('role不符合验证--自定义提示')),
    //     state: Joi.number().valid(0, 1).required().error(new Error('state不符合验证--自定义提示')),

    // });
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
        // await validationSchema.validateAsync(req.body);
        // 使用经过优化导出的验证器验证信息的合法性
        const awaitresult = await validateUser(req.body);
    } catch (e) {
        // 验证没有通过
        // res.send(e.message);
        // return res.redirect(`/admin/user-edit?message=${e.message}`);
        // 调用next方法
        // 同时代码停止向下执行
        // 把对象转换成字符串类型
        // JSON.stringify()
        // 调用next就会触发错误处理中间件
        console.log("比对异常--准备进入错误处理中间件");
        console.log("e----", e);
        return next(JSON.stringify({ path: '/admin/user-edit', message: e.message }));
        // return next()
    }
    // 根据邮箱地址查询用户是否存在
    // 引入用户集合的构造函数
    user = await User.findOne({ email: req.body.email });
    if (user) {
        console.log("使用错误处理中间件来处理邮箱重复的情况");
        return next(JSON.stringify({ path: '/admin/user-edit', message: '邮箱已存在, 请勿重复添加用户' }))
        // return res.redirect(`/admin/user-edit?message=邮箱已存在, 请勿重复添加用户`);
    }
    console.log("对密码进行加密处理")
    // res.send(user);
    // 对密码进行加密处理
    // 生成随机字符串
    const salt = await bcrypt.genSalt(10);
    // 加密
    // bcrypt.hash(req.body.password, salt);
    // 使用秘钥
    const password = await bcrypt.hash(req.body.password, salt);
    // 替换body中的加密后的密码
    req.body.password = password;
    // 检查加密情况
    // res.send(password);
    // 将用户信息添加到数据库
    console.log("将新用户信息插入数据库");
    // 
    await User.create(req.body);
    // 重定向回到用户列表页面
    res.redirect('/admin/user');
};


// {
//     "username": "student",
//         "email": "duanliandag@gmail.com",
//             "password": "12345678",
//                 "role": "normal",
//                     "state": "0"
// }