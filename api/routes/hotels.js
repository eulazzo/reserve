import {
  createHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
} from "../controllers/hotel.controller.js";

import express from "express";
const router = express.Router();

//  CREATE
router.post("/", createHotel);

//  UPDATE
router.put("/:id", updateHotel);

//  DELETE
router.delete("/:id", deleteHotel);

//  GET
router.get("/", getAllHotels);

//  GET ALL

export default router;
