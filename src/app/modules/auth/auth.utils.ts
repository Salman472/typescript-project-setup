import nodemailer from "nodemailer";
import env from "../../../config/env.js";

export const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.email_user,
      pass: env.email_pass
    },
  });

  await transporter.sendMail({
    from: `"Salman's App" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};

export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};