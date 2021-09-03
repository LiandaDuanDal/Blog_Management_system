// import formidable from 
const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article');

module.exports = (req, res) => {
    // 1.创建表单解析对象
    const form = new formidable.IncomingForm();
    //2. 配置上海窜文件的存放目录 
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'upload');
    //3.保留上传文件的后缀（默认是不保留的）
    form.keepExtension = false;
    // 4. 解析表单
    // fields-->保存了普通的表单数据
    // files--->上传的文件。对象类型，保存了和上传文件相关的数据
    // err--->null:假设上传成功
    console.log("正在解析上传的文章内容");
    form.parse(req, async (err, fields, files) => {
        // 
        console.log("fields--->", fields);
        console.log("files--->", files);
        console.log("err--->", err);
        // 
        // 文件的上传路径 / upload / upload_b3b6b9ce1a19638ec9690c81298b5c52
        // console.log("文件的上传路径", files.cover.path.split('public')[1]);
        // res.send(files);
        await Article.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split('public')[1],
            content: fields.content

        });
        console.log("成功插入文章数据到数据库！！");
        // 重定向到文章列表页面
        res.redirect('/admin/article');

    });


    // res.send("ok");
}