import { mb } from "@mb/api";

const mediaService = {
  submitBulkPlans: async (formData) =>
    mb.api.postFormData("api/plan/bulk", formData),

  submitMedia: async (entityId, formData) => mb.api.postToFileUpload(formData),
};

export default mediaService;
