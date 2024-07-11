// import mongoose from "mongoose";

import mongoose from "mongoose";

// type ConnectionObject = {
//   isConnected?: number;
// };

// const connection: ConnectionObject = {};

// async function dbConnect(): Promise<void> {
//   if (connection.isConnected) {
//     console.log("DB is already connected");
//     return;
//   }

//   try {
//     const db = await mongoose.connect(process.env.MONGODB_URI as string, {
//       tls: true, // Ensure TLS is enabled
//     });
//     connection.isConnected = db.connections[0].readyState;
//     console.log("DB connected ok");
//   } catch (error) {
//     console.error("Database connection failed", error);
//     process.exit(1);
//   }
// }

// export default dbConnect;

const MONGODB_URI = process.env.MONGODB_URI;

const dbConnect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI!, {
      bufferCommands: true,
      tls: true,
    });
    console.log("DB is Connected");
  } catch (error: any) {
    console.error(error);
    throw new Error("Error", error);
  }
};
export default dbConnect;
