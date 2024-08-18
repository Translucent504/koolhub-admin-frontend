import { mb } from "@mb/api";

const planService = {
  getById: async (id) => mb.api.get(`api/plan/${id}`),

  getPagedList: async (query) => mb.api.getPagedList(`api/plan`, query),

  getNewPlan: async (entity) => mb.api.post(`api/plan`, entity),

  updatePlan: async (entity) => mb.api.post(`api/plan`, entity),

  submitBulkPlans: async (formData) =>
    mb.api.postFormData("api/plan/bulk", formData),

  submitMedia: async (entityID, formData) => mb.api.postToFileUpload(formData),

  getUnitListByPlanId: async (planId) => mb.api.get(`api/plan/${planId}/units`),

  updateUnit: async (entity) =>
    mb.api.post(`api/plan/${entity.planId}/units`, entity),

  reorderUnits: async (query) =>
    mb.api.post(`api/plan/${query.planId}/units/reorder`, query.entity),

  submitUnitMarkCompleted: async (entity) =>
    mb.api.post(`api/plan/mapping/save`, entity),

  deleteUnit: async (planId, unitId) =>
    mb.api.post(`api/plan/${planId}/units/${unitId}/delete`),

  getPlanMapping: async (subjectId) =>
    mb.api.get(`api/plan/mapping/${subjectId}`),
};

//const instance = new planService(),

export default planService;
