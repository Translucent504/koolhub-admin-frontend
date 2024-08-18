import { mb } from "@mb/api";

const employeeService = {
  getById: async ({ id }) => mb.api.get(`api/employee/${id}`),

  getPagedList: async (query) =>
    mb.api.getPagedList(`api/employee/paged`, query),

  loadMobilizationInfo: async (employee) =>
    mb.api.get(`api/EmployeeMobilization/${employee.empId}`),

  updateMobilizationInfo: async (entity) =>
    mb.api.post(`api/EmployeeMobilization`, entity),

  submitEmployee: async ({ employee }) =>
    mb.api.post(`api/employee/`, employee),

  getMonthlyTeacherList: async (query) =>
    mb.api.get(`api/employee/monthlyEmployee`, query),

  notifyHr: async () => mb.api.get("api/employee/notify"),

};

export default employeeService;
