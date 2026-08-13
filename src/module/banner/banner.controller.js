import bannerService from "./banner.service.js";

const createBanner=(req,res)=>{
    const bannerData=req.body;
    const banner= bannerService.createBanner(bannerData);
    res.status(201).json({
        message:"Banner created successfully",
        data:banner
    })
}

const getAllBanners=(req,res)=>{
    const banners= bannerService.getAllBanners();
    res.status(200).json({
        message:"Banners fetched successfully",
        data:banners
    })
}

const getBannerById=(req,res)=>{
    const {id}=req.params;
    const banner= bannerService.getBannerById(id);
    res.status(200).json({
        message:"Banner fetched successfully",
        data:banner
    })
}

const updateBanner=(req,res)=>{
    const {id}=req.params;
    const updateData=req.body;
    const banner= bannerService.updateBanner(id,updateData);
    res.status(200).json({
        message:"Banner updated successfully",
        data:banner
    })
}

const deleteBanner=(req,res)=>{
    const {id}=req.params;
    const banner= bannerService.deleteBanner(id);
    res.status(200).json({
        message:"Banner deleted successfully",
        data:banner
    })
}

export default {
    createBanner,
    getAllBanners,
    getBannerById,
    updateBanner,
    deleteBanner
}