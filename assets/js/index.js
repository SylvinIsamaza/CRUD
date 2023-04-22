
$('#add_user').submit((event)=>{
    alert('data inserted successful')
})

// const update_user=document.getElementById('update_user')
// update_user.addEventListener('submit',async(event)=>{
//     event.preventDefault()
//     let id= await document.getElementById('id').value
//     console.log(id)
//     let name=update_user.querySelector('#name').value
//     let email=update_user.querySelector('#email').value
//     let genders=update_user.querySelectorAll('#gender')
//     let gender=null
//     for(let i=0;i<2;i++){
// if(genders[i].checked){
//     gender=genders[i].value
//     break;
// }
//     }
//     let statuses=update_user.querySelectorAll('#status')
//     let status=null
//     for(let i=0;i<2;i++){
//         if(statuses[i].checked){
//             status=statuses[i].value
//             break;
//         }
//             }
//     try{
//         const response=await axios.put(`http://localhost:5000/api/user/${id}`,{name,email,gender,status})
//         console.log(response.data)
//     }
//     catch(error){
//         console.log(error)
//     }
// })
// 





// let deleteUser=document.getElementById('delete');
// deleteUser.addEventListener('click',()=>{
//     const id=deleteUser.getAttribute('data-id')
//     if(confirm('Do you really want to delete this user')){
//         axios.delete(`http://localhost:5000/api/user/${id}`)
//     }else{
//         console.log('user not deleted')
//     }
      
// })
