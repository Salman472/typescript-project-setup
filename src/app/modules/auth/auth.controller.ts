import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../../utils/sendResponse.js";
import { AuthService } from "./auth.service.js";
import catchAsync from "../../../utils/catchAsync.js";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.loginUser(req.body);
console.log(result, 'hello error');
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login Successful",
    data: result,
  });
});

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.registerUser(req.body);
  
  // res.status(201).json(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "register successful",
    data: result,
  });
});

export const AuthController = {
  loginUser,
  registerUser
};
