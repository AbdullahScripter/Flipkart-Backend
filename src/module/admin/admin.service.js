import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import adminRepository from "./admin.repository.js";

const loginAdmin = async (email, password) => {
  // 1. Find admin by email
  const admin = await adminRepository.getAdminByEmail(email);

  if (!admin) {
    throw new Error("Invalid email or password");
  }

  // 2. Check if admin is active
  if (!admin.isActive) {
    throw new Error("Admin account is inactive");
  }

  // 3. Compare password
  const isPasswordMatch = await bcrypt.compare(password, admin.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid email or password");
  }

  // 4. Create JWT token
  const token = jwt.sign(
    {
      id: admin._id,
      email: admin.email,
      role: admin.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  // 5. Don't send password to frontend
  return {
    token,
    admin: {
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role,
    },
  };
};


const createAdmin = async (adminData) => {
  const hashedPassword = await bcrypt.hash(adminData.password, 10);

  const admin = await adminRepository.createAdmin({
    ...adminData,
    password: hashedPassword,
  });

  return admin;
};

export default {
  loginAdmin,
  createAdmin,
};
