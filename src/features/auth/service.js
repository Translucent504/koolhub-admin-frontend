import { storage } from "@mb";

export const getUserDetails = async () => {
  return storage.getObject("user");
};

export const clearAuthentication = async () => {
  // update axios token header
  storage.clear();
};

export const authenticateUser = async () => {
  // update axios token header
  const user = { name: "Admin" };
  storage.setObject("user", user);
  return user;
};
