import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../utils/appError";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  // Debug logs for session/cookie issues
  console.log('isAuthenticated middleware - Cookies:', req.cookies);
  console.log('isAuthenticated middleware - Session:', req.session);
  if (!req.user || !req.user._id) {
    throw new UnauthorizedException("Unauthorized. Please log in.");
  }
  next();
};

export default isAuthenticated;
