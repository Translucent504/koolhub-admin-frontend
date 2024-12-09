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
