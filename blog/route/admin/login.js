
// import user.js   
// 解构出User
const { User } = require('../../model/user.js');
// 
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    // res.send(req.body);
    const { email, password } = req.body;
    // if (email.trim().length == 0 || password.trim().length == 0) {
    //     return res.status(400).send('<h4>EMAIL address or password is wrong</h4>');
    // }
    // find user info
    // 如果查询到了用户 user变量的值是对象类型 对象中存储的是用户信息
    // 如果没有查询到用户，user变量为空
    let user = await User.findOne({ email });
    console.log("post 请求接收到user------>", user);
    if (user) {
        // 将客户端传递过来的密码和数据库中的密码进行比对
        let isValid = await bcrypt.compare(password, user.password);
        console.log("比对：", password, '<------->', user.password);
        // isValid = true;
        if (isValid) {
            // 登录成功
            console.log("比对成功");
            // 将用户名春出在请求对象中
            // req.username = user.username;
            req.session.username = user.username;
            console.log("session====>", req.session);
            //存储角色
            req.session.role = user.role;

            // 回传登录成功信息
            // res.send('登录成功');
            // 在req中可以拿到app    
            req.app.locals.userInfo = user;
            // 对用户的角色进行判断
            if (user.role == 'admin') {
                // is admin---redirect to the user list
                res.redirect('/admin/user');
            } else {
                res.redirect('/home');
            }

        } else {
            console.log("密码验证未通过");
            res.status(400).render('admin/error', { msg: '邮箱地址或者密码错误' });
        }
    } else {
        console.log("渲染出错页面");
        res.status(400).render('admin/error', { msg: '邮箱地址或者密码错误' });
    }
};
