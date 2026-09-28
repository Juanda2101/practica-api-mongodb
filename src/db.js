import mongoose from "mongoose";

const DB_USER = "admin";
const DB_PASSWORD = "vagrant";
const DB_HOST = "10.73.191.126";
const DB_PORT = "28017";
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
