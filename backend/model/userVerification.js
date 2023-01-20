const mongoose = require("mongoose")

const userOTPVerificationSchema = mongoose.Schema({
    userID : String,
    otp: {type:String,required:true},
    createAt: String,
    expriseAt:String
})

const userOTPVerificationModel = mongoose.model("userOTPVerification",userOTPVerificationSchema)

module.exports={
    userOTPVerificationModel
}