import { mb } from "@mb/api";

const campusManagementService = {
  
  fetchRoomList: async (query) =>
    mb.api.get(`api/campusManagement/fetchRoomList`, query),
    fetchRoomOccupancy: async (query) =>
    mb.api.get(`api/campusManagement/fetchRoomOccupancy`, query),
    fetchRoomById: async (query) =>
    mb.api.get(`api/campusManagement/fetchRoomById`, query),

    updateRoom: async ( query ) =>
    mb.api.post(`api/campusManagement/updateRoom`, query),

};

export default campusManagementService;
