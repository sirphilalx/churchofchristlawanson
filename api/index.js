import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => console.log(err.message));

const app = express();

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
