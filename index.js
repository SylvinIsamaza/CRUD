const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const bodyparser=require('body-parser')
const morgan=require('morgan')
const path=require('path')
const router=require('./server/routes/router')
const connection=require('./server/database/connection')
const app=express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
connection()
app.use(router)
app.use(morgan('tiny'))
app.set('view engine','ejs')

app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))
app.use('/images',express.static(path.resolve(__dirname,'assets/images')))

 








const port=process.env.PORT||8080
app.listen(port,()=>{
    console.log('application is running on port 5000')
})