import express from "express";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/index.js";
import apiRouter from "./routes/apiRoutes.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(compression());
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "http://localhost:5174",
      "http://192.168.0.102:5173",
      "http://192.168.0.105:5173",
      "http://192.168.0.20:5173",
      "http://192.168.0.125:5173",
      "http://192.168.0.25:5173",
      "http://192.168.0.26:5173",
      "http://192.168.0.103:5174",
      "http://192.168.0.103:5173",
      "http://192.168.0.25:8081",
    ],
    credentials: true,
  })
);
app.use("/", router);
app.get("/", (req, res) => res.send("Welcome to Online Course"));
app.use("/api", apiRouter);
export default app;
