// 导入用户信息构造函数
// 使用的是对象解构的形式
const { User } = require('../../model/user.js');

module.exports = async (req, res) => {
    // 将用户信息从数据库中查询出来


    // res.render('admin/user', {
    //     msg: req.session.username
    // });
    //接收客户端传递过来的当前页参数
    // 使得默认值 是 1 
    let page = req.query.page || 1;
    // 每一页显示的数据条数
    let pageSize = 1;
    // 查询用户数据的总数
    let count = await User.countDocuments({})
    // 总页数
    let total = Math.ceil(count / pageSize);
    // 页码对应的开始位置
    let start = (page - 1) * pageSize;

    // 将用户信息从数据库中查询出来
    let users = await User.find({}).limit(pageSize).skip(start);
    // 传入用户数据users，当前页数-page(默认是1)， 总页数total，
    res.render('admin/user', {
        users: users,
        page: page,
        total: total
    });
    // res.send(users);
}



// [
//     {
//         "state": 0,
//         "_id": "6122a2a52a1899cebcbbce8d",
//         "username": "duanlianda",
//         "email": "ln387408@dal.ca",
//         "password": "$2b$10$GjGLYJmHog0.jA7Mb.WhrOj7ZasRli7rFo.6m0VU.WjYJqr.auen.",
//         "role": "admin",
//         "__v": 0
//     },
//     {
//         "state": 0,
//         "_id": "61239d554eb18c2b51535c5d",
//         "username": "lyq",
//         "email": "lyq@dal.ca",
//         "password": "$2b$10$UrsZY6vs1AulJ1i2HYFaVupc6JHIdVAyEKI.4d3sVzAIxTAZsibue",
//         "role": "normal",
//         "__v": 0
//     }
// ]