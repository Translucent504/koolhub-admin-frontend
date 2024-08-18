import { mb } from "@mb/api";

const lookupService = {
  getList: async (apiQueryModel) => mb.api.get(`api/lookup`, apiQueryModel), // ?${utils.toQueryString(apiQueryModel)}`),
  getLov: async (group) => mb.api.get(`api/lookup/${group}`),
};

export default lookupService;
