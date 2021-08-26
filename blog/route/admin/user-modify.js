const { User } = require('../../model/user');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    // res.send('ok');
    // 拿到post请求的参数
    const body = req.body;
    // 拿到get请求的参数
    const id = req.query.id;
    // res.send(body.password);
    const user = await User.findOne({ _id: id });

    const isValid = await bcrypt.compare(req.body.password, user.password);
    // 密码比对
    if (isValid) {
        // 密码对比成功
        res.send("密码比对成功");
    } else {
        // 密码对比失败
        let obj = { path: '/admin/user-edit', message: "密码错误无法进行密码修改", id: id };
        next(JSON.stringify(obj));
        // res.send("密码比对失败");
    }
}