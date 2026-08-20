import { Readable } from "stream";
import cloudinary from "../../config/cloudinary.js";

const uploadImage = async (file) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "shopease/products",
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      },
    );

    Readable.from(file.buffer).pipe(uploadStream);
  });
};

export default {
  uploadImage,
};
