const express = require('express');
const router = express.Router();
const passport = require('passport');

// 因为路径下的文件export出model变量
// 所以这里的profile赋值的是profile model模型
const profile = require('../../models/profile');


// @route   GET api/profile/
// @desc    全部信息查询
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    profile.find()
        .then(profile => {
            if (!profile) {
                return res.status(404).json('没有任何内容');
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
})

// @route   GET api/profile/
// @desc    单个信息查询
// @access  Private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    profile.findOne({_id:req.params.id})
        .then(profile => {
            if (!profile) {
                return res.status(404).json('没有任何内容');
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
})

// @route   POST api/profile/add
// @desc    Create user profile
// @access  Private
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    // if (req.body.user) profileFields.user = req.body.user;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.describe) profileFields.describe = req.body.describe;
    if (req.body.cash) profileFields.cash = req.body.cash;
    if (req.body.date) profileFields.date = req.body.date;

    new profile(profileFields).save().then(profile => res.json(profile));

})

// @route   POST api/profile/edit
// @desc    edit user profile
// @access  Private
router.post('/edit/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {};
    // if (req.body.user) profileFields.user = req.body.user;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.describe) profileFields.describe = req.body.describe;
    if (req.body.cash) profileFields.cash = req.body.cash;
    if (req.body.date) profileFields.date = req.body.date;

    profile.findOneAndUpdate(
        {_id:req.params.id},
        {$set:profileFields},
        {new:true}
    ).then(profile => res.json(profile));
})

// @route   POST api/profile/delet
// @desc    delete user profile
// @access  Private
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    profile.findOneAndRemove({_id:req.params.id}).then(profile => res.json(profile))
    .catch(err => res.status(404).json('删除失败'));
})

module.exports = router;