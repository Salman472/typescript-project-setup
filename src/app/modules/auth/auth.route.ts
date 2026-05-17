import express, { Router } from "express";
import validateSchema from "../../middleware/validateSchema.js";
import {  registerValidationSchema } from "./auth.validation.js";
import { AuthController } from "./auth.controller.js";

const router: Router = express.Router();

router.post(
  "/login",
  AuthController.loginUser
);
router.post("/register", 
  validateSchema(registerValidationSchema),AuthController.registerUser)

export const AuthRoutes = router;