import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/user.controller.js";

import express from "express";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/VerifyToken.js";
const router = express.Router();

// UNDERSTANDING HOW NEXT MIDDLEWARE WORKS

//checkAuth
// router.get("/checkauthentication", verifyToken, (req,res, next) => {
//   res.send("HELLO THERE")
// });

// checkUser
// router.get("/checkuser/:id", verifyUser, (req,res, next) => {
//   res.send("You are logged and can delete or update yourself")
// });

// checkIsAdmin
// router.get("/checkadmin/:id", verifyAdmin, (req,res, next) => {
//   res.send("You are the bad ass admin and can delete all account")
// });

//  UPDATE
router.put("/:id", verifyUser, updateUser);

//  DELETE
router.delete("/:id", verifyUser, deleteUser);

//  GET
router.get("/", verifyAdmin, getUser);

//  GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;
