import categoryService from "./category.service.js";

const createCategory = async (req, res) => {
  const categoryData = req.body;

  const category = await categoryService.createCategory(categoryData);

  res.status(201).json({
    message: "Category created successfully",
    data: category,
  });
};
 const getAllCategory=async (req,res)=>{
    const categories=await categoryService.getAllCategories();
    res.status(200).json({
        message:"Categories fetched successfully",
        data:categories
    })
 }

 const getCategoryById=async(req,res)=>{
    const {id} =req.params
    const category=await categoryService.getCategoryById(id);
    res.status(200).json({
        message:"Category fetched successfully",
        data:category
    })
 }
 const getCategoryByName=async(req,res)=>{
    const {name}=req.params
    const category=await categoryService.findByName(name);
    res.status(200).json({
        message:"Category fetched successfully",
        data:category
    })
 }

 const updateCategory=async(req,res)=>{
    const {id}=req.params;
    const updateData=req.body;
    const category=await categoryService.updateCategory(id,updateData);
    res.status(200).json({
        message:"Category updated successfully",
        data:category
    })
 }

 const deleteCategory=async(req,res)=>{
    const {id}=req.params;
    const category=await categoryService.deleteCategory(id);
    res.status(200).json({
        message:"Category deleted successfully",
        data:category
    })
 }



export default {
  createCategory,
  getAllCategory,
  getCategoryById,
  getCategoryByName,
  updateCategory,
  deleteCategory
};



