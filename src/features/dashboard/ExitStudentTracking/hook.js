import { useQuery } from "@tanstack/react-query";
import dashboardServices from "../Services/dashboardServices";


export const useExitStudentsList = ({date}) =>
    useQuery({
      queryKey:["exitStudentsList",],
      queryFn: async () => dashboardServices.exitStudentsList({date}),
    });
  
