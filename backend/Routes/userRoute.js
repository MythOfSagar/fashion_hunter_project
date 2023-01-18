const express = require("express");
const { userModel } = require("../model/userModel");
const userRotes = express.Router();
const bcrypt = require("bcrypt")

userRotes.post("/register",(req,res)=>{
    let {name,email,password,dateOfBirth} = req.body
    // name = name.trim();
    // email=email.trim();
    // password=password.trim();
    // dateOfBirth=dateOfBirth=trim();

    if (name==="" || email==="" || password==="" || dateOfBirth===""){
        res.json({
            status:"FAILED",
            message:"Empty input fields"
        })
    } else if (!/^[a-zA-Z ]*$/.test(name)){
        res.json({
            status:"FAILED",
            message:"Your name shouldnot be contain any number"
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status:"FAILED",
            message:"You have entered a invalid email"
        })
    }else if (!/(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/.test(dateOfBirth)){
        res.json({
            status:"FAILED",
            message:"Date of birh should be in dd/mm/yyyy format"
        })
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)){
        res.json({
            status:"FAILED",
            message:"Password should contain alphanumeric and one uppercase letter"
        })
    } else {
        userModel.find({email}).then((result)=>{
            if (result.length>0){
                res.json({
                    status:"FAILED",
                    message:"User already exist, please login"
                })
            } else {
                bcrypt.hash(password,5).then((hashpassword)=>{
                    const newUser= new userModel({
                        name,
                        email,
                        password:hashpassword,
                        dateOfBirth
                    })

                    newUser.save().then((result)=>{
                        res.json({
                            status:"SUCCESS",
                            message:"Registered successfully",
                            data:result
                        })
                    })
                    .catch((err)=>{
                        res.json({
                            status:"FAILED",
                            message:"Registration failed, try again later"
                        })
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:"FAILED",
                        message:"Error, password not hashed"
                    })
                })
            }
        }).catch((err)=>{
            res.json({
                status:"FAILED",
                message:"Registration failed, try again later"
            })
        })
    }

})

userRotes.post("/login",(req,res)=>{
    let {email,password} = req.body
    if ( email==="" || password===""){
        res.json({
            status:"FAILED",
            message:"Empty input fields"
        })
    } else {
        userModel.find({email})
        .then((data)=>{
            if (data){
                const hashPassword=data[0].password;
                bcrypt.compare(password,hashPassword)
                .then((result)=>{
                    if (result){
                        res.json({
                            status:"SUCCESS",
                            message:"Login successfull",
                            data:data
                        })
                    } else {
                        res.json({
                            status:"FAILED",
                            message:"Password doesnot match"
                        })
                    }
                })
                .catch((err)=>{
                    res.json({
                        status:"FAILED",
                        message:"Password comparing failed"
                    })
                })
            } else {
                res.json({
                    status:"FAILED",
                    message:"Wrong credentials"
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:"FAILED",
                message:"Wrong credentials"
            }) 
        })
    }
})

module.exports={
    userRotes
}