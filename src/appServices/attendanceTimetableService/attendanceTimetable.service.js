import { mb } from "@mb/api";

const attendanceTimetableService = {
  fetchAttendanceTimetable: async () => mb.api.get(`api/attendanceTimetable`),
  saveAttendanceTimetable: async (entity) =>
    mb.api.post(`api/attendanceTimetable`, entity),
};

export default attendanceTimetableService;
