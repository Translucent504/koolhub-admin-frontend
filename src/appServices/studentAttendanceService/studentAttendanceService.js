import { mb } from "@mb/api";

const studentAttendanceService = {
  fetchStudentAttendanceList: async (query) => {
    return mb.api.post(`api/StudentAttendance/`, query);
  },
  updateStudentAttendanceList: async (query) => {
    return mb.api.post(`api/StudentAttendance/update`, query);
  },
  updateStudentAttendanceDetail: async (query) => {
    return mb.api.post(`api/StudentAttendance/updateDetail`, query);
  },
};

export default studentAttendanceService;
