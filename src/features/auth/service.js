/* eslint-disable no-unused-vars */
import { storage } from "@mb";
import { mb } from "@mb/api";

mb.api.apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      clearAuthentication();
    } else {
      console.error("API error:", error.response);
    }
    return Promise.reject(error);
  }
);

export const initializeAuth = async () => {
  console.log("Initializing Auth");
  const token = storage.get("token");
  if (token) {
    mb.api.setAuthorizationToken(token);
    try {
      const user = await mb.api.post("api/auth/admin/verify");
      console.log({ user });
      if (user?.active) {
        storage.setObject("user", user);
        return user;
      }
    } catch (error) {
      console.error("Failed to verify token:", error);
      await clearAuthentication();
    }
  }
  await clearAuthentication();
  return null;
};

export const getUserDetails = async () => {
  return storage.getObject("user");
};

export const clearAuthentication = async () => {
  try {
    storage.clear();
    mb.api.setAuthorizationToken(null);
    console.log("Authentication cleared successfully");
  } catch (error) {
    console.error("Error clearing authentication:", error);
  }
};

// code = username = 8df939f2-6d2e-4ae8-af0f-f73558e7c6fb
export const authenticateUser = async ({ username, password }) => {
  try {
    const response = await mb.api.get(`api/auth/admin/verify/code/${username}`);
    console.log({ response });
    const { token, profileInfo } = response;

    storage.set("token", token);
    mb.api.setAuthorizationToken(token);
    storage.setObject("user", profileInfo);

    return profileInfo;
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error;
  }
};
