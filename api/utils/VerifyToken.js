import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(createError(401, "You are not authenticated!"));

  //userInfo = {id:user._id, isAdmin:user._isAdmin} created when the user log in.
  jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, userInfo) => {
    if (err) return next(createError(403, "Token not valid"));
    req.user = userInfo;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res,next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(
        createError(403, "You're not allowed to perform this action")
      );
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You're not admin"));
    }
  });
};
