module.exports = (req, res) => {
    // res.send('Welcome to the main page for admin');
    console.log(req.body);
    console.log("admin get ---admin/login.art---called")
    res.render('admin/login.art');
}