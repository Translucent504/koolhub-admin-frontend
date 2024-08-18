import { mb } from "@mb/api";

const dashboardService = {
  loadStudentList: async (query) => {
    return mb.api.get(`api/Student/studentCount`,query);
  },
  loadSectionList: async (query) => {
    return mb.api.get(`api/grade/${query}/sections`);
  },
  loadFeeCount: async (query) => {
    return mb.api.get(`api/student/feeCount/${query}`);
  },
  loadStudentsAreaWise: async (query) => {
    const queryString = query
      ? `api/Student/studentsAreaWise/${query}`
      : `api/Student/studentsAreaWise`;
    return mb.api.get(queryString);
  },
  loadTempEmpList: async (query) => {
    const queryString = query
      ? `api/Student/tempEmpList/${query}`
      : `api/Student/tempEmpList`;
    return mb.api.get(queryString);
  },
  fetchTotalStudentsDR: async (query) => {
    return mb.api.get(`api/student/totalStudents`, query);
  },
  loadEmoloyeeCounter: async (query) => {
    return mb.api.get(`api/Employee/employeeCount`, query);
  },
  fetchStudentRetention: async (query) => {
    return mb.api.get(`api/student/studentRetention`, query);
  },
  fetchEmployeeRetention: async (query) => {
    return mb.api.get(`api/employee/employeeRetention`, query);
  },
  loadExitStudentsCountCampusWise: async (query) => {
    return mb.api.get(`api/student/exitStudentsCountCampusWise`, query);
  },
  loadExitStudentsList: async (query) => {
    return mb.api.get(`api/student/exitStudentsList`, query);
  },
  loadConfirmedStudentsCountCampusWise: async (query) => {
    return mb.api.get(`api/student/confirmedStudentsCountCampusWise`, query);
  },
  loadConfirmedStudentsList: async (query) => {
    return mb.api.get(`api/student/confirmedStudentsList`, query);
  },
  loadTotalStudentsCountCampusWise: async (query) => {
    return mb.api.get(`api/student/totalStudentsCountCampusWise`, query);
  },
  fetchGlanceMeetings: async (query) => {
    return mb.api.get(`api/student/fetchGlanceMeetings`, query);
  },
  fetchAnnouncements: async (query) => {
    return mb.api.get(`api/student/fetchAnnouncements`, query);
  },
  fetchExitStudentsTracking: async (query) => {
    return mb.api.get(`api/student/fetchExitStudentsTracking`, query);
  },
};

export default dashboardService;
