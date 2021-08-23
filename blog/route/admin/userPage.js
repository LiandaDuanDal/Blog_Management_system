// 导入用户信息构造函数
// 使用的是对象解构的形式
const { User } = require('../../model/user.js');

module.exports = async (req, res) => {
    // 将用户信息从数据库中查询出来
    let users = await User.find({});

    // res.render('admin/user', {
    //     msg: req.session.username
    // });
    res.render('admin/user', {
        users: users
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