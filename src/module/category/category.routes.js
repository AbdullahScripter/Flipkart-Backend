import express from "express";
import categoryController from "./category.controller.js";

const router = express.Router();

router.post("/", categoryController.createCategory);
router.get("/", categoryController.getAllCategory);
router.get("/:id", categoryController.getCategoryById);
router.get("/name/:name", categoryController.getCategoryByName);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

export default router;