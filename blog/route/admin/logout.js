module.exports = (req, res) => {
    // 删除session
    req.session.destroy(function () {
        // delete cookie
        res.clearCookie('connect.sid');
        // redirect to login page
        res.redirect('/admin/login');
    });
}