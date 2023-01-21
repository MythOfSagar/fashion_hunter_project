require("./config/db")
require('dotenv').config()
const express = require("express");
const { userRotes } = require("./Routes/userRoute");
const cors = require("cors");
const { ReviewRouter } = require("./Routes/review.route");
const { authenticate } = require("./middlewares/authenticate.middleware");
const { CartRouter } = require("./Routes/cart.route");
const { WishlistRouter } = require("./Routes/wishlist.route");
const app = express();

app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use("/user",userRotes)
app.use("/review",ReviewRouter)
app.use(authenticate);
app.use("/cart",CartRouter);
app.use("/wishlist",WishlistRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})


// "name":"halje",
// "email":"hiltonborah123@gmail.com",
// "password":"Abc123@",
// "dateOfBirth":"85478"