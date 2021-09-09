const { Article } = require('../../model/article.js');
// const populate = require('')

module.exports = async (req, res) => {
    // 接收客户端传递过来的文章id
    const id = req.query.id;
    // 根据id查询文章详细信息-关联查询
    let article = await Article.findOne({ _id: id }).populate('author');
    article = JSON.parse(JSON.stringify(article));
    // 渲染模板文件进行展示
    // res.send(article);
    res.render('home/article.art', { article: article });
    // res.render('home/article.art');
}