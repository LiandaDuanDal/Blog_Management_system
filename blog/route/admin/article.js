// 导入文章集合的构造函数以查询所有文章的数据
const { Article } = require('../../model/article.js');

module.exports = async (req, res) => {
    // 这是一个标识，标识当前访问的是文章管理
    req.app.locals.currentLink = 'article';
    console.log("正在访问文章路由");
    // 查询所有文章数据  
    // 这里涉及到多集合联合查询
    // 后面加lean是解决JSON类型的bug
    let articles = await Article.find().populate('author').lean();
    // let articles = await Article.find();
    // console.log("获取文章列表成功");
    // console.log(articles);
    // res.send(articles[0].author.username);
    // 渲染文章列表模板
    res.render('admin/article.art', {
        articles: articles
    });
}

// 此处无法渲染原版中的author
// 解决方案如下
// https://www.cxyzjd.com/article/qq_38294099/112762554
// 有两个解决方案：
// 1.在populate后面增加.lean();
// 2.通过JSON.stringify()将mogoose文档 对象转换为字符串，再通过JSON.parse()转换为普通对象；

// https://kb.objectrocket.com/mongo-db/how-to-use-mongoose-lean-926
// The answer is that the documents returned with the lean() method are plain javascript.A simple find() query returns mongoose documents that have mongoose magic attached with them, such as getters and setters, and save function, and other things.