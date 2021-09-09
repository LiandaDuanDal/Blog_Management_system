// 这个模块在外部默认是访问不到的
const guard = (req, res, next) => {
    // 拦截用户请求，判断用户的登录状态
    //判断用户访问的是否为登录界面
    // 如果用户是登录的=====>请求放行
    // 如果用户不是登录的===>请求重定向到登录界面

    // 访问的不是登录界面 && 没有登录
    console.log("Current user", req.session.username);
    if (req.url != '/login' && !req.session.username) {

        console.log("访问的不是登录界面 && 没有登录 重定向到登录页面")
        res.redirect('/admin/login');
    } else {
        // 用户是登录状态，将请求放行
        // 如果用户是登录状态并且是普通用户 重定向到博客首页并组织程序向下执行----by using return
        if (req.session.role == 'normal') {
            console.log("用户是登录状态并且是普通用户 重定向到博客首页并组织程序向下执行");
            return res.redirect('/home/');
        }
        req.next();
    }
}

module.exports = guard;