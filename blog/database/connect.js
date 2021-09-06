// 获取配置文件中的配置信息
const config = require('config');
// import mongoose package
const mongoose = require('mongoose');
// connect
console.log("用于连接数据库的连接(使用反引号模板字符串拼接)，注意中间不要随意加空格====>", `mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')
    }:${config.get('db.port')}/${config.get('db.name')}`)
// 加入鉴权信息用户名 itcast 密码itcst
mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')
    }:${config.get('db.port')} /${config.get('db.name')}`, { useNewUrlParser: true })
    .then(() => { console.log('connected to the databaese') })
    .catch(() => { console.log('Fail to connect to the databaese') })
