import mongoose from "mongoose";

const DB_USER = "admin";
const DB_PASSWORD = "password123";
const DB_HOST = "mongo";
const DB_PORT = "27017";
const DB_NAME = "appdb";
const fallbackURI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

const mongoURI = process.env.MONGO_URI || fallbackURI;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("DB is connected");
    console.log(mongoURI);
  } catch (error) {
    console.log(error);
  }
};
