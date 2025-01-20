import express from "express"
import { register, login } from "../controllers/user.js"; // Assuming you also have a 'login' function
import { isAuth } from "../middleware/isAuth.js";


const router =express.Router()

router.route("/api/register").post(isAuth,register)




router.route("/api/user/login").post()
export default router;





