import { storage } from "@mb";

export const getUserDetails = async () => {
  return storage.getObject("user");
};

export const clearAuthentication = async (api) => {
  // update axios token header
  storage.clear();
  delete api.defaults.headers["Authorization"];
};

export const authenticateUser = async (api) => {
  const token = "";
  // update axios token header
  const user = { name: "Admin" };
  storage.setObject("user", user);
  api.defaults.headers["Authorization"] = `Bearer ${token}`;

  return user;
};
