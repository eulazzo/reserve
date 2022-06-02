import {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  countByCity,
  countByType,
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
router.get("/find/:id", getHotel);


router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
