const { Article } = require('../../model/article.js');
// const populate = require('')
// 导入评论集合构造函数
const { Comment } = require('../../model/comment.js')
module.exports = async (req, res) => {
    // 接收客户端传递过来的文章id
    const id = req.query.id;
    // 根据id查询文章详细信息-关联查询
    let article = await Article.findOne({ _id: id }).populate('author');
    article = JSON.parse(JSON.stringify(article));
    // console.log("HOME NOW", req.app.locals.userInfo);
    // 渲染模板文件进行展示
    let comments = await Comment.find({ aid: id }).populate('uid');
    comments = JSON.parse(JSON.stringify(comments));
    // res.send(comments);
    // res.send(article);
    // console.log(req.app.locals.userInfo)
    res.render('home/article.art', {
        article: article,
        comments: comments
    });
    // res.render('home/article.art');
}