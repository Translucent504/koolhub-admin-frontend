import { storage } from "@mb";
import { mb } from "@mb/api";

export const getUserDetails = async () => {
  return storage.getObject("user");
};

export const clearAuthentication = async () => {
  // update axios token header
  storage.clear();
  mb.api.setAuthorizationToken(null);
};

export const authenticateUser = async () => {
  const token = "";
  // update axios token header
  const user = { name: "Admin" };
  storage.setObject("user", user);
  mb.api.setAuthorizationToken(token);

  return user;
};
