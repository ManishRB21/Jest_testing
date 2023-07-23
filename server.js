const mongoose= require('mongoose')
const app = require("./app")
const PORT = 5000

require("dotenv").config({path:".env"})

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    app.listen(PORT, console.log("server connected and mongodb connected"))
}).catch((err)=>{
    console.error("failed",err)
})

