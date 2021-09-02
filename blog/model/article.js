// 1. import mongoose用于数据库操作
const mongoose = require('mongoose');
// 2. 创建文章集合的规则
const articleSchema = new mongoose.Schema({
    //    标题
    title: {
        type: String,
        maxlength: 20,
        minlength: 4,
        required: [true, '请填写文章标题']
    },
    // 作者
    author: {
        // 在author里面存储的实际上是_id
        type: mongodb.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '请填写作者参数']
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null

    },
    content: {
        type: String
    }

});
// 3. 根据规则创建集合
const Article = mongoose.model('Article', articleSchema);

// 4. 将集合作为模块成员进行导出

module.exports = {
    Article: Article
};