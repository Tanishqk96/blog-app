const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:[true, "please enter a username!"]
    },
    email:{
        type:String,
        required:[true, "please enter an email!"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "please enter a password!"]
    },
    address:{
        type: String,
    },
    phone:{
        type: String,
        required:[true, 'phone number required']
        }
},{timestamps:true})

module.exports = mongoose.model('User',userSchema);