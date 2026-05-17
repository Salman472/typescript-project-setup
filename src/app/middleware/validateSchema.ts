import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

const validateSchema = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validateSchema;
