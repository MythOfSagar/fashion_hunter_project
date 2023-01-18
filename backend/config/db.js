const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Database established")
})
.catch((err)=>{
    console.log(err)
})