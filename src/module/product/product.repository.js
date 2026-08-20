import Product from "./product.model.js";


const createProduct = async (productData) => {
  const product = await Product.create(productData);
  return product;
};


const getAllProducts = async () => {
  const products = await Product.find().populate("category");

  return products;
};


const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};


const updateProduct = async (id, updateData) => {
  const product = await Product.findByIdAndUpdate(id, updateData, {
    new: true,
  });

  return product;
};


const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  return product;
};

export default {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
