import express from "express";
import { bookAppointment, cancelAppointment, getProfile, listAppointment, loginUser, paymentRazorpay, registerUser, updateProfile, verifyRazorpay } from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";




// instance of router
const userRouter = express.Router();


// API end poitnt 
userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);

userRouter.get('/get-profile',authUser,getProfile);
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile);

userRouter.post('/book-appointment',authUser,bookAppointment);
userRouter.get('/my-appointments',authUser,listAppointment);
userRouter.post('/cancel-appointment',authUser,cancelAppointment);



userRouter.post('/payment-razorpay',authUser,paymentRazorpay);
userRouter.post('/verifyrazorpay',authUser,verifyRazorpay);




export default userRouter;
