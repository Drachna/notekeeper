const router=require('express').Router()
const requireAuthentication =require('../middlewares/authMiddleware')
const authController =require('../controllers/authController')

router.post('/api/register',authController.register_post)
router.post('/api/login',authController.login_post)
router.get('/api/logout',authController.logout_get)
router.get('/api/getUser',requireAuthentication,authController.auth_get)





module.exports=router