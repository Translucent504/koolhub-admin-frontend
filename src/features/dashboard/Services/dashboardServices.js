import { mb } from "@mb/api";

const dashboardServices = {
  // getPagedList: async (query) => mb.api.getPagedList(`api/van/paged`, query),
  //   getById: async (id) => mb.api.get(`api/vans/${id}`),
  //   createOrUpdate: async (query) => mb.api.post(`api/vans/`, query),
  //   delete: async (id) => mb.api.sendDelete(`api/vans/${id}`),

  fetchGlanceMeetings: async (query) => {
    return mb.api.get(`api/student/fetchGlanceMeetings`, query);
  },

  fetchAnnouncements: async (query) => {
    return mb.api.get(`api/student/fetchAnnouncements`, query);
  },

  employeeCounter: async (query) => {
    return mb.api.get(`api/Employee/employeeCount`, query);
  },

  exitStudentsList: async (query) => {
    return mb.api.get(`api/student/fetchExitStudentsTracking`, query);
  },

  // one pera campusID
  fetchRoomOccupancy: async (query) => {
    return mb.api.get(`api/campusManagement/fetchRoomOccupancy`, query);
  },

  // 3 pera capmus Id, date from to
  totalStudentsCountCampusWise: async (query) => {
    return mb.api.get(`api/student/totalStudentsCountCampusWise`, query);
  },

  // one pera campusID
  fetchCampusKeepUp: async (query) => {
    return mb.api.get(`api/KpiInfo/CampusUpKeepDashboard`, query);
  },

  fetchTempEmpList: async (query) => {
    const queryString = query
      ? `api/Student/tempEmpList/${query}`
      : `api/Student/tempEmpList`;
    return mb.api.get(queryString);
  },

  // delete: async (id) => {
  //   const index = VAN_DATA.findIndex((item) => item.id === id);

  //   if (index !== -1) {
  //     VAN_DATA.splice(index, 1);
  //     return true;
  //   }
  //   return false;
  // },
};

export default dashboardServices;
