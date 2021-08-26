const { User } = require('../../model/user');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    // res.send('ok');
    // 拿到post请求的参数
    // const body = req.body;
    const { username, email, role, state, password } = req.body;
    // 拿到get请求的参数
    // 因为这里的id是通过表单的get请求参数传递过来的
    const id = req.query.id;
    // res.send(body.password);
    let user = await User.findOne({ _id: id });

    const isValid = await bcrypt.compare(req.body.password, user.password);
    // 密码比对
    if (isValid) {
        // 密码对比成功
        // 将用户信息更新到数据库中
        // 第二个参数是将要被修改的对象
        // 密码不能直接拿去更新数据库，
        // User.updateOne({ _id: id }, {
        //     username: req.body.username,
        //     email: req.body.email,
        //     role: req.body.role,
        //     state: req.body.state
        // });
        console.log("尝试更新用户信息。。。");
        await User.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state
        });
        // 页面重定向回到列表 表示修改成功
        res.redirect('/admin/user');
        // res.send("密码比对成功");
    } else {
        // 密码对比失败
        let obj = { path: '/admin/user-edit', message: "密码错误无法进行密码修改", id: id };
        next(JSON.stringify(obj));
        // res.send("密码比对失败");
    }
}