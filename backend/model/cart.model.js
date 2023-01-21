const mongoose = require("mongoose");

const cartSchema=mongoose.Schema({
rating:Number,
categories:String,
title:String,
price:Number,
realPrice:Number,
brand:String,
color:String,
mainImage:String,
userID:String,
});

const CartModel=mongoose.model("cart",cartSchema);

module.exports={
    CartModel
}