const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
 const connection=()=>{
    const url=process.env.MONGODB_URI
mongoose.connect(url)
.then(()=>{
console.log('connected to database')
})
.catch((e)=>{
    console.log('not connected '+e)
})
 }
 module.exports=connection