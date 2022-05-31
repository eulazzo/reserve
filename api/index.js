import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

dotenv.config();
const app = express();
const PORT = 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDb disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDb connected");
});

// MIDDLEWARES
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(PORT, () => {
  connectDB();
  console.log("listening at port", PORT);
});
