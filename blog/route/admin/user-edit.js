module.exports = (req, res) => {
    // 由于之前设置了环境，模板的根目录是从view开始的
    res.render('admin/user-edit.art');
}