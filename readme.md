# vue + node.js + mongodb 管理网站代码
## 1.代码结构
### 前端：
* funds文件夹：里面包含所有的前端文件

### 后端：
* config文件夹：放置着password的设置文件
* models文件夹：放置着user，profile的模型逻辑
* node_modules被gitignore掉了，以免文件上传过大，都是些库文件。
* routes文件夹：里面是模型调用接口api，以及网页routes的路由逻辑
* package-lock.json：里面是node_modules里面库的信息名字，根据这些可以补充下载这些代码库
* package.json：重点修改了script里面的东西，加入dev，可以同时前后端启动。输入 npm run dev 即可启动——相当于同时 *npm start --prefix funds* 和 *nodemon server.js*。（详情可见package.json就能理解）
* server.js：重点文件，后端启动的主文件

### 数据库：
* 通过本地简单搭建的mongodb，使用monogoose库链接。

## 2.技术点的使用

### 后端的技术
1. 使用express轻框架
2. monogoose链接数据库
3. 使用passport、passport-jwt进行数据加密
4. body-parser

    后端的主要作用就是 route路由 和 数据库的链接 增删改查

### 前端的技术
1. vue框架