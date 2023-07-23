const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        name :{
            type :String,
            required:true,
        },
        price :{
            type :String,
            required:true,
        },
        description:{
            type :String,
            required:true,
        }
    },
    {
        timestamp:true
    })

const model = mongoose.model('model', schema)

module.exports=model;