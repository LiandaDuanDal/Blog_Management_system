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

> git reset --hard HEAD^

就很简单，回滚master分支的上一次提交。

- 第二步：强制提交本地代码

> git push origin master -f

由于本地reset 之后本地库落后于远程N个版本，所以需要强制提交。

# 数据库



## 重新定位并启动数据库

```bash
mongod --dbpath /Users/lianda_duan/Desktop/Blog_management/Mongo_Database_file
```

## 关闭数据库



## git命令剪贴板

```bash
git add .
git commit -m "日期格式规范化 yyyy-mm-dd"
git push origin master
```



其它笔记：

{{@ value }}      -- 原样输出（变量前加@符号）

密码：12345678
