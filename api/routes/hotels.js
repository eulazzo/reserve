import {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
} from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../utils/VerifyToken.js";

import express from "express";
const router = express.Router();

//  CREATE
router.post("/", verifyAdmin, createHotel);

//  UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//  DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//  GET ALL
router.get("/", getAllHotels);

// GET HOTEL
router.get("/", getHotel);

export default router;
