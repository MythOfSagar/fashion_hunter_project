require("./config/db")
require('dotenv').config()
const express = require("express");
const { userRotes } = require("./Routes/userRoute");
const app = express();

app.use(express.json());
app.use("/user",userRotes)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})