import { useQuery } from "@tanstack/react-query";
import dashboardServices from "../Services/dashboardServices";

export const useFetchRooms = ({ CampusId }) =>
  useQuery({
    queryKey: ["Rooms", CampusId],
    queryFn: async () => dashboardServices.fetchRoomOccupancy({ CampusId }),
  });

export const useFetchStudentsCountCampusWise = ({ CampusId, to, from }) =>
  useQuery({
    queryKey: ["StudentsCount", CampusId, to, from],
    queryFn: async () =>
      dashboardServices.totalStudentsCountCampusWise({ CampusId, to, from }),
  });
