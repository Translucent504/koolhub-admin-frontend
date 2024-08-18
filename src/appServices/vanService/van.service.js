import { mb } from "@mb/api";

const vanService = {
  getPagedList: async (query) => mb.api.getPagedList(`api/van/paged`, query),
  getById: async (id) => mb.api.get(`api/van/${id}`),
  submit: async (query) => mb.api.post(`api/van/`, query),
  delete: async (id) => mb.api.sendDelete(`api/van/${id}`),
  getStudentVanAssignment: async (query) =>
    mb.api.get(`api/student/StudentVanAssignment`, query),
  updateStudentVanAssignment: async (query) =>
    mb.api.post(`api/student/StudentVanAssignment`, query),
};

export default vanService;
