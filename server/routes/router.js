const router=require('express').Router()
const axios=require('axios')
const validation=require('../validation/validation')
// axios helps us to make a  request to the api
const controller=require('../controllers/controller')
router.get('/',(req,res)=>{
    axios.get('http://localhost:5000/api/users')
  
    .then((response)=>{
        console.log(response)
        res.render('index',{users:response.data})
    })
})
router.get('/add-user',(req,res)=>{
    res.render('add_user')
})
router.get('/update-user',async (req,res)=>{
    let id=req.query.id;
    console.log(id)
    axios.get(`http://localhost:5000/api/user/${id}`)
    .then((userdata)=>{
        res.render('update_user',{users:userdata.data})
    })
    .catch((error)=>{
        res.send(error||'user not updated')
    })
    
})
router.post('/api/users',controller.createUser)
router.get('/api/users',controller.find)
router.get('/api/user/:id',controller.findsingleuser)

router.post('/api/users/update/:id',controller.update)
router.post('/api/users/delete/:id',controller.deleting)
module.exports=router
// await fetch('http://localhost:5000/api/users')
//.then((response)=>{

// })