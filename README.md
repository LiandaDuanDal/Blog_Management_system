# Introduction

这是一个博客管理的练习项目

主要采用express框架

数据库部分使用MongoDB

模板引擎使用的是art-template

https://aui.github.io/art-template/zh-cn/docs/installation.html

# implementation

## 建立项目文件夹

```bash
public-静态资源
model-数据库操作
route-路由操作
views-模板
```


## 初始化项目描述文件

```
npm init -y
```



## 下载第三方模块

```
npm install express mongoose art-template express-art-template
```



## 创建网站服务器

# login

get请求会把表单内容放到地址栏。

做服务器端验证的必要性：如果用户禁用了js那么客户端的验证就会失败。

# 不小心提交了一个很大的文件不想要了，回滚到上一个commit版本

- 第一步：回滚上一次提交

> ```bash
> git reset --hard HEAD^
> ```
>
> 

就很简单，回滚master分支的上一次提交。

- 第二步：强制提交本地代码

> ```bash
> git push origin master -f
> ```
>
> 

由于本地reset 之后本地库落后于远程N个版本，所以需要强制提交。

# 数据库



## 重新定位并启动数据库

```bash
mongod --dbpath /Users/lianda_duan/Desktop/Blog_management/Mongo_Database_file --logpath /Users/lianda_duan/Desktop/Blog_management/Mongo_Database_file/log/mongodb.log
```

原始conf文件备份：

```bash
systemLog:
  destination: file
  path: /usr/local/var/log/mongodb/mongo.log
  logAppend: true
storage:
  dbPath: /usr/local/var/mongodb
net:
  bindIp: 127.0.0.1
security:
    authorization: enabled
```



##关闭数据库



## git命令剪贴板

```bash
git add .
git commit -m "使用morgan模块让服务器在不同环境（开发、生产）环境下决定是否打印请求的细节"
git push origin master
```



### 带有环境变量NODE_ENV=production/development的启动命令

```bash
1.生产环境参考命令--->NODE_ENV=production nodemon app.js
2.开发环境参考命令--->NODE_ENV=development nodemon app.js

ps：这里用node和nodemon都可以，node的话不会在保存js文件的时候重启服务
```

其它笔记：

{{@ value }}      -- 原样输出（变量前加@符号）

密码：12345678

# 给mongoDB添加数据库账号

windows用户应该用管理员的方式运行power shell

1：连接数据库

```bash
 mongo
```

2：查看数据库 

```bash
show dbs
```

3：切换到admin数据库 

```bash
use admin
```

3：创建超级管理员账户 

```bash
db.createUser()
```

6:  切换到blog数据 

```bash
use blog
```



## 将自动启动数据库的服务卸载掉（windows）

创建mongoddb服务： 

```
mongod --logpath="路径" --install -auth
```

启动monggodb服务：

```bash
net start mongodb
```

1：停止服务

```
 net stop mongodb
```

2：mongod --remove

## 让mongoDB附带安全选项

```bash
To restart MongoDB with access control, run the mongod process from your terminal with the --auth option. The mongod process is located in a bin folder in the MongoDB installation directory.

mongod --dbpath <path to data directory> --auth
```

### Mac上配置nodejs环境变量用于判断当前代码环境是开发环境还是生产部署环境







## 杂记

1：Mac检查pid

https://www.chriswrites.com/how-to-view-and-kill-processes-using-the-terminal-in-mac-os-x/

```bash
(base) ➜  ps     
  PID TTY           TIME CMD
  561 ttys000    0:00.31 -zsh
29634 ttys000    0:02.22 mongod --dbpath /Users/lianda_duan/Desktop/B
  566 ttys001    0:00.38 -zsh
  792 ttys002    0:00.25 /bin/zsh -l
  799 ttys003    0:00.33 /bin/zsh -l
29684 ttys003    0:00.33 node /usr/local/bin/nodemon app.js
29695 ttys003    0:01.18 /usr/local/bin/node app.js
16106 ttys004    0:00.24 -zsh

```



https://blog.csdn.net/u013066244/article/details/117171334



## 创建账号并启用管理员权限的过程（mac）

https://blog.csdn.net/u013066244/article/details/117171334

包括创建管理员账号adimin和普通账号itcast

```bash
> use admin
switched to db admin
> db.createUser({user:'root',pwd:'root',roles:['root']})
Successfully added user: { "user" : "root", "roles" : [ "root" ] }
> db.createUser({user:'itcast',pwd:'itcast',roles:['readWrite']})
Successfully added user: { "user" : "itcast", "roles" : [ "readWrite" ] }
> exit
bye
```

使用sublime打开配置文件

```bash
subl /usr/local/etc/mongod.conf
```

```bash
systemLog:
  destination: file
  path: /usr/local/var/log/mongodb/mongo.log
  logAppend: true
storage:
  dbPath: /usr/local/var/mongodb
net:
  bindIp: 127.0.0.1
security:
    authorization: enabled
```







