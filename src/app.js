import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import notesRoutes from "./routes/notes.routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: "http://192.168.56.10:5173",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", notesRoutes);

export default app;
