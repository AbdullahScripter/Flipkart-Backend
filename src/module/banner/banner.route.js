import express from "express";
import bannerController from "./banner.controller.js";

const router = express.Router();

router.post("/", bannerController.createBanner);
router.get("/", bannerController.getAllBanners);
router.get("/:id", bannerController.getBannerById);
router.put("/:id", bannerController.updateBanner);
router.delete("/:id", bannerController.deleteBanner);

export default router;