const mongoose = require("mongoose");

const cartSchema=mongoose.Schema({
categories:String,
title:String,
price:Number,
realPrice:Number,
quantity:Number , 
mainImage:String,
userID:String,
});

const CartModel=mongoose.model("cart",cartSchema);

module.exports={
    CartModel
}


// "mainImage": "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/h/3/j/m-crc-den-01-carbonn-blue-original-imafv2h7g7bvgfdz-bb.jpeg?q=70",
//       "categories": "CarbonnCloth",
//       "title": "Men Regular Fit Solid Cut Away Collar Casual Shirt",
//       "price": 500,
//       "realPrice": 700,
//       "quantity": 1,
//       "id": 4