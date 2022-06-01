import express from "express";

import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/room.controller.js";

import { verifyAdmin } from "../utils/VerifyToken.js";
const router = express.Router();

//  CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//  UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//  DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//  GET ALL ROOMS
router.get("/", getAllRooms);

// GET Room
router.get("/:id", getRoom);

export default router;
