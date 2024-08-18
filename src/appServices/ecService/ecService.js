import { mb } from "@mb/api";

const ecService = {
  getById: async (id) => mb.api.get(`api/ElectronicContent/${id}`),

  getPagedList: async (query) =>
    mb.api.getPagedList(`api/ElectronicContent/paged`, query),

  getPagedListWithDetails: async (query) =>
    mb.api.getPagedList(`api/ElectronicContent/pagedWithDetails`, query),

  submitECItem: async (ec) => mb.api.post(`api/ElectronicContent`, ec),

  getEcDetailsListByParentId: async (id) =>
    mb.api.get(`api/ElectronicContent/${id}/details`),

  updateEcDetailItem: async (entity) =>
    mb.api.post(
      `api/ElectronicContent/${entity.electronicContentId}/details`,
      entity
    ),

  deleteEcDetailItem: async (electronicContentId, detailId) =>
    mb.api.post(
      `api/ElectronicContent/${electronicContentId}/details/${detailId}/delete`
    ),

  getRecommendations: async (query) =>
    mb.api.getPagedList(`api/ElectronicContentRecommendation/paged`, query),

  updateEcRecommendation: async (entity) =>
    mb.api.post(`api/ElectronicContentRecommendation`, entity),
};

export default ecService;
