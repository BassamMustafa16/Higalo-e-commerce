import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!JWT_SECRET) {
    res.status(401).json({ message: "No Key provided" });
    return;
  }
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "No token provided" });
    return;
  }
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      res.status(403).json({ message: "Invalid token" });
      return;
    }
    // @ts-ignore
    req.user = user;
    console.log(user);
    next();
  });
}
