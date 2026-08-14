import express from "express";
import adminController from "./admin.controller.js";

const router = express.Router();

router.post("/create", adminController.createAdmin);

router.post("/login", adminController.loginAdmin);

export default router;