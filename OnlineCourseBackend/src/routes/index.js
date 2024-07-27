import express from "express";
import UserRouter from "./userRoutes.js";
import apiRouter from "./apiRoutes.js";

const router = express.Router();

router.use("/users", UserRouter);
router.use("/api", apiRouter);

export default router;
