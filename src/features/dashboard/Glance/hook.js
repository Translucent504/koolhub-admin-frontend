import { useQuery } from "@tanstack/react-query";
import dashboardServices from "../Services/dashboardServices";


export const useGlanceMeetings = ({date}) =>
    useQuery({
      queryKey:["GlanceMeetings",date],
      queryFn: async () => dashboardServices.fetchGlanceMeetings({date}),
    });
  
