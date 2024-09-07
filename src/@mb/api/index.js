import axios from "./axios";
import { utils } from "@mb";

const apiCall = {
  get: async (url, query) => {
    const config = utils.isEmpty(query) ? {} : { params: query };
    return (await axios.get(url, config)).data;
  },

  getPagedList: async (url, query) => {
    const response = await axios.get(url, { params: query });
    return {
      pageInfo: JSON.parse(response.headers["x-pagination"]),
      data: response.data,
    };
  },

  post: async (url, entity) => (await axios.post(url, entity)).data,

  postFormData: async (url, formData) => (await axios.post(url, formData)).data,

  postToFileUpload: async (formData) => (await axios.post('api/file/upload', formData)).data,

  delete: async (url, query) => {
    const config = utils.isEmpty(query) ? {} : { params: query };
    return (await axios.delete(url, config)).data;
  }
};

export const mb = {
  api: apiCall,
};
