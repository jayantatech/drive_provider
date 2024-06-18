import { promises } from "fs";
import mongoose from "mongoose";
type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("DB is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(
      (process.env.MONGODB_URI as string) || "",
      {
        ssl: true, // Add this line if SSL is required
      }
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected ok");
  } catch (error) {
    console.log("data base connected fail");
    process.exit(1);
  }
}

export default dbConnect;
