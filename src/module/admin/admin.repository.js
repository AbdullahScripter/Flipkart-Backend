import Admin from "./admin.model.js";

const createAdmin = async (adminData) => {
  const admin = await Admin.create(adminData);
  return admin;
};

const getAdminByEmail = async (email) => {
  const admin = await Admin.findOne({ email });
  return admin;
};

const getAdminById = async (id) => {
  const admin = await Admin.findById(id);
  return admin;
};

export default {
  createAdmin,
  getAdminByEmail,
  getAdminById,
};
