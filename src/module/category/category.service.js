import categoryRepository from "./category.repository.js";

const createCategory =async (categoryData) => {
    const category=await categoryRepository.createCategory(categoryData);
    return category;
}

const getAllCategories = async (page, limit) => {
  const categories = await categoryRepository.getAllCategories(page, limit);

  return categories;
};

const getCategoryById = async (id)=>{
    const category = await categoryRepository.getCategoryById(id);
    return category
}

const findByName = async (name) => {
  const category = await categoryRepository.findByName(name);
  return category;
};

const updateCategory=async(id,updateData)=>{
    const category=await categoryRepository.updateCategory(id,updateData);
    return category;
}
const deleteCategory=async(id)=>{
    const category=await categoryRepository.deleteCategory(id);
    return category;
}

export default {
    createCategory,
    getAllCategories,
    getCategoryById,
    findByName,
    updateCategory,
    deleteCategory
}