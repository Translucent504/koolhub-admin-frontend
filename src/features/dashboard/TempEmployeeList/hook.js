import { useQuery } from "@tanstack/react-query";
import dashboardServices from "../Services/dashboardServices";

export const useFetchTempEmpList = ({ userCode }) =>
  useQuery({
    queryKey: ["TempEmpList", userCode],
    queryFn: async () => dashboardServices.fetchTempEmpList(userCode),
  });
