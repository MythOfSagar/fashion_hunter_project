require("./config/db")
require('dotenv').config()
const express = require("express");
const { userRotes } = require("./Routes/userRoute");
const cors = require("cors")
const app = express();

app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use("/user",userRotes)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})