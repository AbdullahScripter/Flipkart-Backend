import productRepository from "./product.repository.js";

const createProduct = async (productData) => {
  const product = await productRepository.createProduct(productData);

  return product;
};

const getAllProducts = async (page, limit, category, status, search) => {
  return await productRepository.getAllProducts(
    page,
    limit,
    category,
    status,
    search,
  );
};

const getProductById = async (id) => {
  const product = await productRepository.getProductById(id);

  return product;
};

const updateProduct = async (id, updateData) => {
  const product = await productRepository.updateProduct(id, updateData);

  return product;
};

const deleteProduct = async (id) => {
  const product = await productRepository.deleteProduct(id);

  return product;
};

export default {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
