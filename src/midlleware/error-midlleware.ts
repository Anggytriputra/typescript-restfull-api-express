import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ResponnseError } from "../error/response-error";

export const errorMidlleware = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ZodError) {
    res.status(400).json({
      error: `Validation Error : ${JSON.stringify(error)}`,
    });
  } else if (error instanceof ResponnseError) {
    res.status(error.status).json({
      error: error.message,
    });
  } else {
    res.status(500).json({
      errors: error.message,
    });
  }
};
