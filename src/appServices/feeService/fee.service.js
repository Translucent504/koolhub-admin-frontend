import { mb } from "@mb/api";

const feeService = {
  getChallansForApproval: async (query) =>
    mb.api.get(`api/fee/challansForApproval`, query),
  approveChallans: async (query) =>
    mb.api.post(`api/fee/approveChallans`, query),
  fetchFeeChallanList: async (query) => {
    return mb.api.get(`api/fee/viewFeeChallan`, query);
  },
  fetchFeeChallanDetail: async (query) => {
    return mb.api.get(`api/fee/ChallanDetail`, query);
  },
};

export default feeService;
