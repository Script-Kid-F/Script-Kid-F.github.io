const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const passport = require('passport');

// 这里export整个文件，将内部路由导出
const users = require('./routes/api/user.js');
const profile = require('./routes/api/profile.js');

// 为了符合url编码的规范，而且url中不能包含其他字符，需要进行转义处理，例如email的@
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/test",{
    useNewUrlParser: true
}).then(() => console.log("connected to db"))
  .catch(err => console.log(err));

app.use(passport.initialize());

require('./config/passport')(passport);

// 使用routers， 连接对应内外路由关系
// 个人理解：前参是外网路径，后参是文件路径
app.use('/api/users', users);
app.use('/api/profile', profile);

const port = 8888;

app.listen(port, () => {
    console.log(`server running on prt ${port}`)
})
