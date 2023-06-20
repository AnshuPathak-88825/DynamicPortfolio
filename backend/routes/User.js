import express from "express";
import { contact, getUser, login, logout ,myProfile, updateUser} from "../controller/User.js";
import {isAuthenticated} from '../midllewares/auth.js'
export const userRouter = express.Router();
userRouter.route("/login").post(login);

userRouter.route("/user").get(getUser);

userRouter.route("/logout").get(logout);

userRouter.route("/me").get(isAuthenticated,myProfile);


userRouter.route("/admin/update").put(isAuthenticated,updateUser);

userRouter.route("/contact").post(contact);
