import { useQuery } from "@tanstack/react-query";
import dashboardServices from "../Services/dashboardServices";

export const useCampusKeepUp = () =>
  useQuery({
    queryKey: ["CampusKeepUp"],
    queryFn: async () => await dashboardServices.fetchCampusKeepUp(),
  });