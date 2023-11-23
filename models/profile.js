const mongoose = require("mongoose")
const schema = mongoose.Schema

const profileSchema = new schema({
    // user:{
    //     type: schema.Types.ObjectId,
    //     ref: 'user'
    // },
    company:{
        type: String,
        require:true
    },
    describe:{
        type: String
    },
    cash:{
        type: Number,
        require:true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

// 个人理解：有人调用这个文件的路径，自动将这个profile model传参给他；并不会调用文件后，执行所有代码
// 类似将文件执行完的单个变量retrun回去，profile就是文件返回的变量
module.exports = profile = mongoose.model('profile', profileSchema)