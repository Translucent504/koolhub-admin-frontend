import { mb } from "@mb/api";

const kpiService = {
  getKpiInfo: async (kpiInfo) => mb.api.get(`api/KpiInfo`, kpiInfo),
  getKpiInfoById: async ({ id }) => mb.api.get(`api/KpiInfo/${id}`),
  getPagedList: async (query) =>
    mb.api.getPagedList(`api/kpiinfo/paged`, query),
  submitDailyReport: async (entity) => mb.api.post(`api/KpiInfo`, entity),
  submitMonthlyReport: async (entity) =>
    mb.api.post(`api/KpiInfo/monthly`, entity),
  fetchKpiMonthlyReport: async (query) =>
    mb.api.get(`api/KpiInfo/monthly`, query),
  fetchRelationshipWithParents: async (query) =>
    mb.api.get(`api/KpiInfo/relationshipWithParents`, query),
  fetchDropoutStudent: async (query) => mb.api.get(`api/KpiInfo`, query),
  drDashboardItems: async (query) =>
    mb.api.get(`api/KpiInfo/DashboardItemsDR`, query),
  fetchMonthlyReportGraphContent: async (query) =>
    mb.api.get(`api/KpiInfo/DashboardItemsMR`, query),
  submitCampusUpKeep: async (entity) =>
    mb.api.post(`api/KpiInfo/campusUpKeep`, entity),
  getCampusUpKeepById: async ({ id }) => mb.api.get(`api/KpiInfo/${id}`),
  fetchCampusUpKeepDashboard: async ({ query }) =>
    mb.api.get(`api/KpiInfo/CampusUpKeepDashboard`, query),
};

export default kpiService;
