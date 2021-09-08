// 导入文章模块
const { Article } = require('../../model/article');
// 导入分页模块
const pagination = require('mongoose-sex-page');
module.exports = async (req, res) => {
    // 接收客户端传递过来的页码
    const page = req.query.page;

    // 客户端一次性显示5个页码-display(5)
    // 从数据库中查询数据
    let result = await pagination(Article).page(page).size(4).display(5).find().populate('author').exec();
    // let result = await Article.find().populate('author');
    // res.send(result);
    // return;
    // 使用数据渲染模板
    // 关键步骤不用这个会报错
    // result = JSON.stringify(result);
    result = JSON.parse(JSON.stringify(result));
    res.render('home/default.art', {
        result: result
    });
};


// 多集合联合查询
// {
//     "cover": "/upload/upload_b400e5cd8c125efc3856e8a45cbbfe0f",
//         "_id": "6132550dd41ede92b95f6b97",
//             "title": "Server-Halifax-DUAN",
//                 "author": "6122a2a52a1899cebcbbce8d",
//                     "publishDate": "2021-09-11T00:00:00.000Z",
//                         "content": "<p>test paragraph!!</p>",
//                             "__v": 0
// },
// 对author进行联合查询后的结果
// {
//     "cover": "/upload/upload_b400e5cd8c125efc3856e8a45cbbfe0f",
//         "_id": "6132550dd41ede92b95f6b97",
//             "title": "Server-Halifax-DUAN",
//                 "author": {
//         "state": 0,
//             "_id": "6122a2a52a1899cebcbbce8d",
//                 "username": "duanlianda",
//                     "email": "ln387408@dal.ca",
//                         "password": "$2b$10$GjGLYJmHog0.jA7Mb.WhrOj7ZasRli7rFo.6m0VU.WjYJqr.auen.",
//                             "role": "admin",
//                                 "__v": 0
//     },
//     "publishDate": "2021-09-11T00:00:00.000Z",
//         "content": "<p>test paragraph!!</p>",
//             "__v": 0
// },