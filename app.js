const express = require('express')
const app = express()
const pRoute = require('./routes/pRoute')
app.use(express.json())

app.post('/',(req, res)=>{
    res.status(200).json({alive:"True"})
})

app.use("/api",pRoute)

module.exports=app;