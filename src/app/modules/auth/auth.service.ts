import { prisma } from "../../../lib/prisma.js";
import { generateOTP, sendEmail } from "./auth.utils.js";
import { LogInInput, OtpInput, RegisterInput } from "./auth.validation.js";
import bcrypt from "bcrypt";

// user register
const registerUser = async (payload: RegisterInput) => {
  // hash password
  const hashedPassword = await bcrypt.hash(payload.password, 10);
  const otp = generateOTP()
  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      otp
    },
  });
  await sendEmail(
    payload.email,
    "OTP for Salman Login",
    `<h1>Your OTP is: ${otp}</h1>`
  );
   return {
    message: "User created. OTP sent to email",
    userId: user.id,
  };
};

// login user
export const loginUser = async (payload:LogInInput) => {
  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(payload.password, user.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};

// verify user
export const OtpVerify=async(payload:OtpInput)=>{
const user=await prisma.user.findUnique({
  where:{
    email:payload.email
  }
})
if(!user){
  throw new Error('User Not Found')
}
if(user.isVerified){
  throw new Error ('User Already Verified')
}
if(user.otp !== payload.otp){
  throw new Error ('Invalid OTP')
}
const verifiedUser=await prisma.user.update({
  where:{
    email:payload.email
  },
  data:{
    isVerified:true,
    otp:null
  }
})
return {
    success: true,
    message: "OTP verified successfully",
    data: verifiedUser,
}
}
export const AuthService = {
  registerUser,
  loginUser,
  OtpVerify,
};
