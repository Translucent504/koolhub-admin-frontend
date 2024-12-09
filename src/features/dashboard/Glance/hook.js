import { useQuery } from "@tanstack/react-query";
import dashboardServices from "../Services/dashboardServices";


export const useGlanceMeetings = ({date}) =>
    useQuery({
      queryKey:["GlanceMeetings",],
      queryFn: async () => dashboardServices.fetchGlanceMeetings({date}),
    });
  
