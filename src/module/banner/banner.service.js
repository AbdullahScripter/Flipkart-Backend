import bannerRepository from "./banner.repository.js";

const createBanner=async(bannerData)=>{
    const banner = await bannerRepository.createBanner(bannerData);
    return banner;
}

const getAllBanners=async()=>{
    const banners=await bannerRepository.getAllBanners();
    return banners;
}

const getBannerById=async(id)=>{
    const banner=await bannerRepository.getBannerById(id);
    return banner;
}

const updateBanner=async(id,updateData)=>{
    const banner=await bannerRepository.updateBanner(id,updateData);
    return banner;
}

const deleteBanner=async(id)=>{
    const banner=await bannerRepository.deleteBanner(id);
    return banner;
}

export default {
    createBanner,
    getAllBanners,
    getBannerById,
    updateBanner,
    deleteBanner
};