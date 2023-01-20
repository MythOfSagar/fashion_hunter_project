const mongoose = require("mongoose")

const userOTPVerificationSchema = mongoose.Schema({
    userID : {type:String,required:true},
    otp: {type:String,required:true},
    createAt: {type:Date,required:true},
    expriseAt:{type:Date,required:true}
})

const userOTPVerificationModel = mongoose.model("userOTPVerification",userOTPVerificationSchema)

module.exports={
    userOTPVerificationModel
}