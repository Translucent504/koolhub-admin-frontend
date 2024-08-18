import { mb } from "@mb/api";

// example: query = {
//     empId: 208,
//     from: "2022-11-01",
//     to: "2022-11-10"
//  }
const staffAttendanceService = {
  fetchStaffAttendanceByDateRange: async (query) => {
    return mb.api.get(`api/StaffAttendance/${query.empId}`, query);
  },
  fetchAllStaffAttendanceByDate: async (query) => {
    return mb.api.get(`api/StaffAttendance`, query);
  },
  bulkUpdateStatus: async (query) => {
    return mb.api.post(`api/StaffAttendance/updateStatus`, query);
  },
  updateStatusEntry: async (query) => {
    return mb.api.post(`api/StaffAttendance/updateStatusEntry`, query);
  },
};

export default staffAttendanceService;
