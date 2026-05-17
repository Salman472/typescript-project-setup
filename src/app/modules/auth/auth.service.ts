import { prisma } from "../../../lib/prisma.js";
import { RegisterInput } from "./auth.validation.js";
import bcrypt from "bcrypt";
const loginUser = async (payload: {
  email: string;
  password: string;
}) => {
  return {
    email: payload.email,
    token: "jwt-token-demo",
  };
};
// user register
const registerUser = async (payload: RegisterInput) => {
  // hash password
  const hashedPassword = await bcrypt.hash(payload.password, 10);
 const user=await prisma.user.create({
  data:{
    name:payload.name,
    email:payload.email,
    password:hashedPassword
  }
 })
 return user
};


export const AuthService = {
  loginUser,
  registerUser
};