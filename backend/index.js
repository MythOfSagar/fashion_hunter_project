require("./config/db")
require('dotenv').config()
const express = require("express");
const { userRotes } = require("./Routes/userRoute");
const cors = require("cors");
const { authenticate } = require("./middlewares/authenticate.middleware");
const { CartRouter } = require("./Routes/cart.route");
const { WishlistRouter } = require("./Routes/wishlist.route");
const { ReviewRouter1 } = require("./Routes/ReviewRoute/review1.route");
const { ReviewRouter2 } = require("./Routes/ReviewRoute/review2.route");
const { ReviewRouter3 } = require("./Routes/ReviewRoute/review3.route");
const { ReviewRouter4 } = require("./Routes/ReviewRoute/review4.route");
const { ReviewRouter5 } = require("./Routes/ReviewRoute/review5.route");
const { ReviewRouter6 } = require("./Routes/ReviewRoute/review6.route");
const { ReviewRouter7 } = require("./Routes/ReviewRoute/review7.route");
const { ReviewRouter8 } = require("./Routes/ReviewRoute/review8.route");
const { ReviewRouter9 } = require("./Routes/ReviewRoute/review9.route");
const { ReviewRouter10 } = require("./Routes/ReviewRoute/review10.route");
const { ReviewRouter11 } = require("./Routes/ReviewRoute/review11.route");
const { ReviewRouter21 } = require("./Routes/ReviewRoute/review21.route");
const { ReviewRouter12 } = require("./Routes/ReviewRoute/review12.route");
const { ReviewRouter13 } = require("./Routes/ReviewRoute/review13.route");
const { ReviewRouter14 } = require("./Routes/ReviewRoute/review14.route");
const { ReviewRouter15 } = require("./Routes/ReviewRoute/review15.route");
const { ReviewRouter16 } = require("./Routes/ReviewRoute/review16.route");
const { ReviewRouter17 } = require("./Routes/ReviewRoute/review17.route");
const { ReviewRouter18 } = require("./Routes/ReviewRoute/review18.route");
const { ReviewRouter20 } = require("./Routes/ReviewRoute/review20.route");
const { ReviewRouter19 } = require("./Routes/ReviewRoute/review19.route");
const app = express();

app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use("/user",userRotes)
app.use("/review",ReviewRouter1)
app.use("/review",ReviewRouter2)
app.use("/review",ReviewRouter3)
app.use("/review",ReviewRouter4)
app.use("/review",ReviewRouter5)
app.use("/review",ReviewRouter6)
app.use("/review",ReviewRouter7)
app.use("/review",ReviewRouter8)
app.use("/review",ReviewRouter9)
app.use("/review",ReviewRouter10)
app.use("/review",ReviewRouter11)
app.use("/review",ReviewRouter12)
app.use("/review",ReviewRouter13)
app.use("/review",ReviewRouter14)
app.use("/review",ReviewRouter15)
app.use("/review",ReviewRouter16)
app.use("/review",ReviewRouter17)
app.use("/review",ReviewRouter18)
app.use("/review",ReviewRouter19)
app.use("/review",ReviewRouter20)
app.use("/review",ReviewRouter21)
app.use(authenticate);
app.use("/cart",CartRouter);
app.use("/wishlist",WishlistRouter)

app.get("/", (req, res) => {
    res.send("HOME page of Fashion Hunterr");
  });

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})


// "name":"halje",
// "email":"hiltonborah123@gmail.com",
// "password":"Abc123@",
// "dateOfBirth":"85478"