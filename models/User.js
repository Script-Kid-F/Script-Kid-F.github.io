const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const UserSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    identity:{
        type:String,
        required: true
    }
})

module.exports = User = mongoose.model("users", UserSchema);