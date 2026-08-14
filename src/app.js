import express, { json } from "express";
import cors from "cors";

import categoryRoutes from "./module/category/category.routes.js";
import bannerRoutes from "./module/banner/banner.route.js";
import productRoutes from "./module/product/product.routes.js";
import adminRoutes from "./module/admin/admin.route.js";

const app = express();

app.use(cors());
app.use(json());


app.use("/api/categories", categoryRoutes);


app.use("/api/banners", bannerRoutes);


app.use("/api/products", productRoutes);


app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

export default app;
