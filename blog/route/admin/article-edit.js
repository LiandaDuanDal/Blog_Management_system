module.exports = (req, res) => {
    // 这是一个标识，标识当前访问的是文章管理
    req.app.locals.currentLink = 'article';
    console.log("正在访问文章编辑路由✏️");
    res.render('admin/article-edit.art');
}