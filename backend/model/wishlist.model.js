const mongoose = require("mongoose");

const wishlistSchema=mongoose.Schema({
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

const WishlistModel=mongoose.model("wishlist",wishlistSchema);

module.exports={
  WishlistModel
}