import { mb } from "@mb/api";

const bigXService = {
  getBigKpiList: async (data) => mb.api.get(`api/KpiInfo/bigx`, data),
  updateBigKpi: async (data) => mb.api.post(`api/KpiInfo/bigx`, data),
};

export default bigXService;
