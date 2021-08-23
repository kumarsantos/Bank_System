const express=require("express")
const router = express.Router();
const {register,login,forgetPassword} =require('../controllers/auth')
const {protect}=require('../middlewares/authMiddleware')

router.route('/register').post(register)

// router.post("/login", authController);
router.route('/login').post(protect,login);
router.route('/forgetPassword').post(forgetPassword);

module.exports = router;
