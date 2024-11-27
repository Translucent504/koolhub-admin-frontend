import { utils } from "@mb";
import apiClient from "./axios";

const apiCall = {
  apiClient,
  get: async (url, query) => {
    const config = utils.isEmpty(query) ? {} : { params: query };
    return (await apiClient.get(url, config)).data;
  },

  getPagedList: async (url, query) => {
    const response = await apiClient.get(url, { params: query });
    const pageInfo = JSON.parse(response.headers.get("X-Pagination"));
    const data = response.data;
    return {
      pageInfo,
      data,
    };
  },

  post: async (url, entity) => (await apiClient.post(url, entity)).data,

  postFormData: async (url, formData) =>
    (await apiClient.post(url, formData)).data,

  postToFileUpload: async (formData) =>
    (await apiClient.post("api/file/upload", formData)).data,

  delete: async (url, query) => {
    const config = utils.isEmpty(query) ? {} : { params: query };
    return (await apiClient.delete(url, config)).data;
  },
  setAuthorizationToken: (token) => {
    if (!token) {
      delete apiClient.defaults.headers["Authorization"];
      return;
    }
    apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
  },
};

export const mb = {
  api: apiCall,
};
