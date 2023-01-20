const express = require("express");
const { userModel } = require("../model/userModel");
const { userVerificationModel, userOTPVerificationModel } = require("../model/userVerification")
const userRotes = express.Router();
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")
const { uuid } = require('uuidv4');
require('dotenv').config()
var jwt = require('jsonwebtoken');
//making transport with client

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD
    }
})


transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready")
        console.log(success)
    }
})

userRotes.post("/register", (req, res) => {
    let { name, email, password, dateOfBirth, verified } = req.body

    if (name === "" || email === "" || password === "" || dateOfBirth === "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields."
        })
    } else if (!/^[a-zA-Z ]*$/.test(name)) {
        res.json({
            status: "FAILED",
            message: "Your name shouldnot be contain any number."
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "You have entered a invalid email."
        })
    // } else if (!/(((0|1)[0-9]|2[0-9]|3[0-1])\-(0[1-9]|1[0-2])\-((19|20)\d\d))$/.test(dateOfBirth)) {
    //     res.json({
    //         status: "FAILED",
    //         message: "Date of birh should be in dd/mm/yyyy format."
    //     })
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
        res.json({
            status: "FAILED",
            message: "Password should be alphanumeric and contain one uppercase letter."
        })
    } else {
        userModel.find({ email }).then((result) => {
            if (result.length > 0) {
                res.json({
                    status: "FAILED",
                    message: "User already exist, please login."
                })
            } else {
                bcrypt.hash(password, 5).then((hashpassword) => {
                    const newUser = new userModel({
                        name,
                        email,
                        password: hashpassword,
                        dateOfBirth,
                        verified: false
                    })

                    newUser.save().then((result) => {
                        // res.json({
                        //     status:"SUCCESS",
                        //     message:"Registered successfully",
                        //     data:result
                        // })

                        sendOTPVerificationEmail(result, res)
                    })
                        .catch((err) => {
                            res.json({
                                status: "FAILED",
                                message: "Registration failed, try again later."
                            })
                        })
                })
                    .catch((err) => {
                        res.json({
                            status: "FAILED",
                            message: "Error, password not hashed."
                        })
                    })
            }
        }).catch((err) => {
            res.json({
                status: "FAILED",
                message: "Registration failed, try again later."
            })
        })
    }

})


// const sendVerificationEmail=({_id,email},res)=>{
//     const currentUrl = "http://localhost:4500/";

//     const uniqueString = uuid()+_id;

//     const mailOptions={
//         from: process.env.AUTH_EMAIL,
//         to:email,
//         subject:"Verify Your Email",
//         html:`<p>Verify your email adderess to complete your register and login process.</p><p>Link valid only for <b>next 6 hours.</b></p><p>Click <a href=${currentUrl + "user/verify/" + _id + "/" + uniqueString}>here</a>to proceed</p>`
//     }

//     bcrypt.hash(uniqueString,5)
//     .then((hashedUniqueString)=>{
//         const newVerification = new userVerificationModel({
//             userID : _id,
//             uniqueString:hashedUniqueString,
//             createAt:Date.now(),
//             expriseAt:Date.now() + 21600000
//         })

//         newVerification.save()
//         .then(()=>{
//             transporter.sendMail(mailOptions)
//             .then(()=>{
//                 res.json({
//                     status:"PENDING",
//                     message:"Verification email send"
//                 })
//             })
//             .catch((err)=>{
//                 res.json({
//                     status:"FAILED",
//                     message:"Email verificaton failed"
//                 })
//             })
//         })
//         .catch((err)=>{
//             res.json({
//                 status:"FAILED",
//                 message:"An error occurred while saving email data"
//             })
//         })
//     })
//     .catch((err)=>{
//         res.json({
//             status:"FAILED",
//             message:"An error occurred while hashing email data"
//         })
//     })
// }


userRotes.post("/login", (req, res) => {
    let { email, password } = req.body
    // console.log(req.body)
    if (email === "" || password === "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields"
        })
    } else {
        userModel.find({ email })
            .then((data) => {
                if (data) {
                    const hashPassword = data[0].password;
                    bcrypt.compare(password, hashPassword)
                        .then((result) => {
                            if (result) {
                                const token = jwt.sign({ userID: data[0]._id }, 'hilton')
                                res.json({
                                    status: "SUCCESS",
                                    message: "Login successfull.",
                                    token: token,
                                    data: data
                                })
                            } else {
                                res.json({
                                    status: "FAILED",
                                    message: "Password doesnot match."
                                })
                            }
                        })
                        .catch((err) => {
                            res.json({
                                status: "FAILED",
                                message: "Password comparing failed."
                            })
                        })
                } else {
                    res.json({
                        status: "FAILED",
                        message: "Wrong credentials."
                    })
                }
            })
            .catch((err) => {
                res.json({
                    status: "FAILED",
                    message: "Wrong credentials."
                })
            })
    }
})


const sendOTPVerificationEmail = async ({ _id, email, name }, res) => {
    try {
        let otp = `${Math.floor(1000 + Math.random() * 9000)}`

        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject: "Verify Your Email",
            html: `<p>Hai ${name},</p><p>Enter <b>${otp}</b> in the input field to verify your email address. It is mandatory to complete your registration process.</p><p><b>Note:-</b> This OTP valid only for <b> 1 hour.</b></p><p>Please do not share your OTP, Password or any sensitive information with anyone.</p><br><p>Regards,</p><p>Team Fashion Hunter</p>`
        }

        const hashedOtp = await bcrypt.hash(otp, 5);
        const newOtpVerfication = await new userOTPVerificationModel({
            userID: _id,
            otp: hashedOtp,
            createAt: Date.now(),
            expriseAt: Date.now() + 3600000
        })

        await newOtpVerfication.save()
        await transporter.sendMail(mailOptions);
        res.json({
            status: "PENDING",
            message: "Verification otp send on email.",
            data: {
                userID: _id,
                email
            }
        })
    } catch (err) {
        res.json({
            status: "FAILED",
            message: err.message,
        })
    }
}

userRotes.post("/verifyotp", async (req, res) => {
    try {
        let { userID, otp } = req.body;
        if (!userID || !otp) {
            throw Error("Empty otp details are not allowed.");
        } else {
            console.log(req.body)
            const userOTPVerificationRecords = await userOTPVerificationModel.find({
                userID,
            });

            console.log(userOTPVerificationRecords)

            if (userOTPVerificationRecords.length <= 0) {
                throw new Error("Acount record doesn't exist or has been verified already please register and login.")
            } else {
                const { expriseAt } = userOTPVerificationRecords[0];
                const hashedOtp = userOTPVerificationRecords[0].otp;

                if (expriseAt < Date.now()) {
                    //user otp record has expired
                    userOTPVerificationModel.deleteMany({ userID });
                    throw new Error("Code has expired. Please request again.")
                } else {
                    const validOtp = await bcrypt.compare(otp, hashedOtp);

                    if (!validOtp) {
                        throw new Error("Invalid code passed, Check your inbox")
                    } else {
                        await userModel.updateOne({ _id: userID }, { verified: true })
                        await userOTPVerificationModel.deleteMany({ userID })
                        res.json({
                            status: "VERIFIED",
                            message: "User email verified successfully, Please Login"
                        })
                    }
                }
            }
        }
    } catch (err) {
        res.json({
            status: "FAILED",
            message: err.message
        })
    }
})


userRotes.post("/resendotp", async (req, res) => {
    try {
        let { userID, email } = req.body;
        if (!userID || !email) {
            throw Error("Empty user details are not allowed.");
        } else {
            await userOTPVerificationModel.deleteMany({ userID });
            sendOTPVerificationEmail({ _id: userID, email }, res)
        }
    } catch (err) {
        res.json({
            status: "FAILED",
            message: err.message
        })
    }
})


module.exports = {
    userRotes
}



