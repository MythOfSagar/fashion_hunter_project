const mongoose = require("mongoose");

const wishlistSchema=mongoose.Schema({
  ID:Number,
  categories:String,
  title:String,
  price:Number,
  realPrice:Number,
  mainImage:String,
  userID:String,
});

const WishlistModel=mongoose.model("wishlist",wishlistSchema);

module.exports={
  WishlistModel
}

// "ID": 1,
//       "mainImage": "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/g/3/w/s-crc-den-01-carbonn-cloth-original-imag3uyxer7hbwcj-bb.jpeg?q=70",
//       "categories": "CarbonnCloth",
//       "title": "Men Regular Fit Solid Cut Away Collar Casual Shirt",
//       "price": 399,
//       "realPrice": 600,
//       "id": 1