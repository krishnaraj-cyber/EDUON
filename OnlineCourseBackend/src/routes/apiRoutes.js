// apiRoutes.js
import express from "express";
import { register, verifyOTP } from "../controllers/auth/registerController.js";
import { login } from "../controllers/auth/loginController.js";
import {
  sendForgotPasswordOTP,
  updatePassword,
  verifyForgotPasswordOTP,
} from "../controllers/auth/passwordController.js";
import authMiddleware from "../middlewares/authmiddleware.js";
import { getAllUsers, updateUserStatus } from "../controllers/User/adminController.js";
// import { generateCertificate, getUserCertifications } from "../controllers/certification/certificationController.js";
import { generateCertificate, markVideoComplete } from "../controllers/certification/CourseController.js";


const apiRouter = express.Router();
apiRouter.post("/apilogin", login);
apiRouter.post("/apiregister", register);
apiRouter.put("/apiverifyOTP", verifyOTP);
apiRouter.post("/apisendforgotpasswordOTP", sendForgotPasswordOTP);
apiRouter.post("/apiverifyforgotpasswordOTP", verifyForgotPasswordOTP);
apiRouter.post("/apiupdatepassword", updatePassword);

apiRouter.get("/users", authMiddleware, getAllUsers);
apiRouter.put("/users/:userId/status", authMiddleware, updateUserStatus);

// Certification routes
// apiRouter.post("/generate-certificate", authMiddleware, generateCertificate);
// apiRouter.get("/user-certifications/:userId", authMiddleware, getUserCertifications);
// New certificate 
apiRouter.post("/mark-video-complete",  markVideoComplete);
apiRouter.post("/generate-certificate",  generateCertificate);


export default apiRouter;
