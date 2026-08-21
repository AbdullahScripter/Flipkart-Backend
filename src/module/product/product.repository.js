import Product from "./product.model.js";


const createProduct = async (productData) => {
  const product = await Product.create(productData);
  return product;
};


const getAllProducts = async (
  page = 1,
  limit = 10,
  category = "",
  status = "",
  search = "",
) => {
  const skip = (page - 1) * limit;

  const filter = {};

  if (category) {
    filter.category = category;
  }

  if (status === "active") {
    filter.isActive = true;
  }

  if (status === "inactive") {
    filter.isActive = false;
  }

  if (search) {
    filter.name = {
      $regex: search,
      $options: "i",
    };
  }

  const products = await Product.find(filter)
    .populate("category")
    .skip(skip)
    .limit(limit);

  const totalProducts = await Product.countDocuments(filter);

  return {
    products,
    totalProducts,
    currentPage: page,
    totalPages: Math.ceil(totalProducts / limit),
    limit,
  };
};


const getProductById = async (id) => {
  const product = await Product.findById(id).populate("category");
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
