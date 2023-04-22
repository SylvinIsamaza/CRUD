const mongoose=require('mongoose')

const schema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    gender:{type:String

    },
    status:{
        type:String}
})
module.exports=mongoose.model('user',schema)