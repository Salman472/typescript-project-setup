import express, { Router } from "express";
import validateSchema from "../../middleware/validateSchema.js";
import {  loginValidationSchema, registerValidationSchema, verifyOtpValidationSchema } from "./auth.validation.js";
import { AuthController } from "./auth.controller.js";

const router: Router = express.Router();


router.post("/register", 
  validateSchema(registerValidationSchema),AuthController.registerUser)

  router.post(
  "/login",
  validateSchema(loginValidationSchema),AuthController.loginUser
);


router.post("/verify-otp", 
  validateSchema(verifyOtpValidationSchema),AuthController.OtpVerify)

export const AuthRoutes = router;