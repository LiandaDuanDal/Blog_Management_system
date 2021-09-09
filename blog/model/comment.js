// 引入数据库
const mongoose = require('mongoose');
// 创建集合
const commentSchema = new mongoose.Schema({
    // 文章id
    aid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },
    // 评论人user id
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // publish Time of comment
    time: {
        type: Date
    },
    // content of comment
    content: {
        type: String
    }
});

// create comment set
const Comment = mongoose.model('Comment', commentSchema);
// export
module.exports = {
    Comment: Comment
};