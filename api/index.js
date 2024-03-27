import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => console.log(err.message));

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// middleware for managing errors in routes
app.use((error, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
