import { mb } from "@mb/api";

const studentService = {
  getById: async (id) => mb.api.get(`api/student/${id}`),
  
  getPagedList: async (query) =>
    mb.api.getPagedList(`api/student/paged`, query),

  getStudentPasswordsByGrNo: async (query) =>
    mb.api.get(`api/student/GetStudentPasswordsByGrNo`, query),
    
  restoreStudentByGrNo: async ({ grNo }) =>
    mb.api.post(`api/student/RestoreStudent/${grNo}`),
  deleteStudentChallanByGrNo: async ({ grNo }) =>
    mb.api.post(`api/student/DeleteStudentChallan/${grNo}`),
};

export default studentService;
