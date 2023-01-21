const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name : {type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    dateOfBirth:{type:Date,required:true},
    verified:false
})

const userModel = mongoose.model("userdata",userSchema)

module.exports={
    userModel
}