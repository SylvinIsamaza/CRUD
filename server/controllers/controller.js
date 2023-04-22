const user=require('../model/model')
const axios=require('axios')
const {validation}=require('../validation/validation')
const { MongoUnexpectedServerResponseError } = require('mongodb')
async function createUser(req,res){
//     // validate the request
//     const{error}=validation(req.body)
//     if(error){
//         res.status(400).send({message:error})
//     }
//    else 
if(!req.body){
        res.status(400).send({message:"content can not be empty"})
    }else{
    
const User=new user({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})

 User.save(User)
.then(data=>{
    console.log('user data successful inserted'+data)
    res.redirect('/add-user')

})
.catch(err=>{
    res.status(500).send({
        message:err.message||'some error occured while creating user'
    })
    console.log(err)
    console.log('an error occured in submission of data')
})
}
}
async function find(req,res){
const users=await user.find()
.then((user)=>{
res.send(user)
})
.catch(err=>{
    res.status(500).send({message:err.message||'Error occured while retrieving the user data'})
})
}
async function update(req,res){
if(!req.body){
    return res.status(400).send({message:"Data to update can not be empty "})
}else{
const id=req.params.id
user.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
.then((data)=>{
    if(!data){
        res.status(404).send({message:`can not update user with ${id}.may be user not found`})
    }
    else{
    res.send(data)
    }
})
.catch(err=>{
    res.status(500).send({message:'error while updating user'})
})
}
} 
async function deleting(req,res){
const id=req.params.id;
user.findByIdAndDelete(id)
.then((data)=>{
    if(!data){
        res.status(404).send({message:`cannot delete with id ${id}.maybe id is wrong`})
    }else{
        res.send({message:'user successful deleted'})
    }
})
.catch(err=>{
    res.status(500).send({message:`could not delete user with id ${id}`})
})
}
async function findsingleuser(req, res) {
    const id = req.params.id;
  
    try {
      const data = await user.findById(id);
      if (data) {
        res.send(data);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
  
async function update_user(req,res){

}
module.exports={createUser,find,update,deleting,findsingleuser,update_user }