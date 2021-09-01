const { User } = require('../../model/user');

module.exports = async (req, res) => {
    // 删除session
    // res.send("ok");
    // 获取要删除的用户id
    // res.send(req.query.id);
    await User.findOneAndDelete({ _id: req.query.id });
    // 重定向回到用户列表
    res.redirect('/admin/user');
}