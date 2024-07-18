import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || '');
    console.log("Connected to the database");
  } catch (error) {
    console.log('DB接続に失敗しました' + error);
    throw new Error();
  }
}