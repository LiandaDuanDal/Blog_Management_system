// 这个模块在外部默认是访问不到的
const guard = (req, res, next) => {
    // 拦截用户请求，判断用户的登录状态
    //判断用户访问的是否为登录界面
    // 如果用户是登录的=====>请求放行
    // 如果用户不是登录的===>请求重定向到登录界面

    // 访问的不是登录界面 && 没有登录
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        // 用户是登录状态，将请求放行
        req.next();
    }
}

module.exports = guard;