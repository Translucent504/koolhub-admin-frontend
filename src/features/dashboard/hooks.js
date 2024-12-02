import dashboardServices from "@mb/Services/dashboardServices";
import { useQuery } from "@tanstack/react-query";

export const useAnnouncements = () =>
  useQuery({
    queryKey: ["Announcements"],
    queryFn: async () => await dashboardServices.fetchAnnouncements(),
  });

// export const useEmployeeCount = ({campusId,date}) =>
//   useQuery({
//     queryKey:["EmployeeCount", campusId, date],
//     queryFn: async () => dashboardServices.employeeCounter({campusId, date}),
//   });

export const useEmployeeCount = () =>
  useQuery({
    queryKey:["EmployeeCount",],
    queryFn: async () => dashboardServices.employeeCounter(),
  });

  export const useExitStudentsList = () =>
    useQuery({
      queryKey:["exitStudentsList",],
      queryFn: async () => dashboardServices.exitStudentsList(),
    });
  
