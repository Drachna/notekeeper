const router=require('express').Router()
const requireAuthentication =require('../middlewares/authMiddleware')
const authController =require('../controllers/authController')

router.post('/api/register',authController.register_post)
router.post('/api/login',authController.login_post)
router.get('/api/logout',authController.logout_get)
router.get('/api/getUser',requireAuthentication,authController.auth_get)


// router.get('/getUser',(req,res)=>{
//   console.log(req.user);
//   let data;
//   if (req.user){
//    data={
//     status:"Authenticated",
//     user:req.user
//   }
// }
// else{
//    data={
//     status:"LOGGED_OUT",
//     user:req.user
// }
// }
//   return res.send(data)

// })



module.exports=router