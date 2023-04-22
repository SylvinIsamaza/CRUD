const Joi=require('joi')

const validation=(data)=>{
const schema={
    email:Joi.string().email().min(10).max(50).required(),
    name:Joi.string().min(6).max(47).required(),
    gender:Joi.string(),
    status:Joi.string()
}
return Joi.validate(data,schema)

}
module.exports={validation}