const { User } = require('../../model/user');
module.exports = async (req, res) => {
    // 获取地址栏中的id参数

    // 由于之前设置了环境，模板的根目录是从view开始的
    // res.render('admin/user-edit.art');
    console.log("解构请求内容:", req.query);
    // 解构请求内容: { id: '6122a2a52a1899cebcbbce8d' }
    // 这里的id和query里面的id对应
    const { message, id } = req.query;

    // 如果当前有id
    if (id) {
        //有id是修改操作 
        // 这里的_id和用户模板里的对应
        let user = await User.findOne({ _id: id });

        // res.send(user);
        // return;
        // 渲染用户编辑页面 (修改)
        res.render('admin/user-edit', {
            message: message,
            user: user,
            link: '/admin/user-modify?id=' + id,
            button: '修改'
        });


    } else {
        //没有id是添加操作
        res.render('admin/user-edit', {
            message: message,
            link: '/admin/user-edit',
            button: '添加'
        });
    }


    res.render('admin/user-edit.art', {
        message: message
    });
};