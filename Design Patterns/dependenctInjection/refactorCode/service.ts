import adminModel from "./model";

export const authenticateUser = async (email, name) => {
  try {
    const result = await adminModel.findAdmin(email);
    if (result.rows.length > 0) {
      return result.rows[0]; // User exists, log in
    } else {
      const insertRes = await adminModel.insertAdmin(email, name);
      return insertRes.rows[0]; // New user created
    }
  } catch (e) {
    console.log(e);
  }
};
