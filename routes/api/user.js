// @login & register
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../../models/User");

// 路由路径api/users/login
router.post("/login", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    User.findOne({name:name})
        .then(user => {
            if (!user) {
                return res.status(400).json({
                    msg: "用户不存在"
                })
            }
            // 密码加密匹配
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const rule = {
                            id: user.id,
                            name: user.name,
                            identity:user.identity
                        }
                        // 生成token
                        jwt.sign(rule, "secret", {expiresIn: 3600}, (err, token) => {
                            if (err) throw err;
                            res.json({
                                msg: "登录成功",
                                success:true,
                                token: "Bearer " + token
                            })
                        })
                    }else{
                        return res.status(400).json({
                            msg: "密码错误"
                        })
                    }
                })
            })
})

router.post("/register", (req, res) => {
    // console.log(req.body);
    // 查询数据库
    User.findOne({name:req.body.name})
        .then(user => {
            if (user) {
                return res.status(400).json({
                    msg: "用户已存在"
                })
            }else{
                const newUser = new User({
                    name: req.body.name,
                    password: req.body.password,
                    identity:req.body.identity
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                })
            }
        })
})

// 路由路径api/users/current
// 验证token，拿取数据库中的数据
router.get("/current",passport.authenticate("jwt",{session:false}), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        identity:req.user.identity
    })
})
module.exports = router;