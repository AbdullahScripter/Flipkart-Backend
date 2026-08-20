import Product from "./product.model.js";


const createProduct = async (productData) => {
  const product = await Product.create(productData);
  return product;
};


const getAllProducts = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const products = await Product.find()
    .populate("category")
    .skip(skip)
    .limit(limit);

  const totalProducts = await Product.countDocuments();

  return {
    products,
    totalProducts,
    currentPage: page,
    totalPages: Math.ceil(totalProducts / limit),
  };
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
