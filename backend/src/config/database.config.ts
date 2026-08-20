import mongoose from "mongoose";
import { Env } from "./env.config";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(Env.MONGO_URI);

    console.log("✅ MongoDB Connected Successfully");

    mongoose.connection.on("connected", () => {
      console.log("🟢 MongoDB connection established");
    });

    mongoose.connection.on("error", (err) => {
      console.error("🔴 MongoDB Error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("🟡 MongoDB Disconnected");
    });

  } catch (error: any) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error.message);
    console.error(error);

    process.exit(1);
  }
};