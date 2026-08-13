import Banner from "./banner.model.js";

const createBanner = async (bannerData) => {
  const banner = await Banner.create(bannerData);
  return banner;
};

const getAllBanners = async () => {
  const banners = await Banner.find().sort({ order: 1 });
  return banners;
};

const getBannerById = async (id) => {
  const banner = await Banner.findById(id);
  return banner;
};

const updateBanner = async (id, updateData) => {
  const banner = await Banner.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  return banner;
};

const deleteBanner = async (id) => {
  const banner = await Banner.findByIdAndDelete(id);
  return banner;
};

export default {
  createBanner,
  getAllBanners,
  getBannerById,
  updateBanner,
  deleteBanner,
};
