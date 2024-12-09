import { useQuery } from "@tanstack/react-query";
import dashboardServices from "../Services/dashboardServices";


export const useEmployeeCount = ({campusId,date}) =>
    useQuery({
      queryKey:["EmployeeCount", campusId, date],
      queryFn: async () => dashboardServices.employeeCounter({campusId, date}),
    });
  