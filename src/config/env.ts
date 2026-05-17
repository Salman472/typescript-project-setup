import dotenv from "dotenv";

dotenv.config();

const env = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV,
  database_url:process.env.DATABASE_URL,
  email_user:process.env.EMAIL_USER,
  email_pass:process.env.EMAIL_PASS
};

export default env;
