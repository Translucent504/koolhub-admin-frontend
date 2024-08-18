import { mb } from "@mb/api";

const studentManagementService = {
 
  fetchExitStudent: async (query) => {
    return mb.api.get(`api/student/fetchExitStudent`, query);
  },
  saveStudentExit: async (query) => {
    return mb.api.post(`api/student/saveStudentExit`, query);
  },
};

export default studentManagementService;
