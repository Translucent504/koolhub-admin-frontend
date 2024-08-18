import { mb } from "@mb/api";

const designationService = {
  fetchDesignation: async () => mb.api.get(`api/designation`),
  saveDesignation: async (entity) =>
    mb.api.post(`api/designation`, entity),
};

export default designationService;
