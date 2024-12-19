import { useQuery } from "@tanstack/react-query";
import dashboardServices from "../Services/dashboardServices";

export const useAnnouncements = () =>
  useQuery({
    queryKey: ["Announcements"],
    queryFn: async () => await dashboardServices.fetchAnnouncements(),
  });