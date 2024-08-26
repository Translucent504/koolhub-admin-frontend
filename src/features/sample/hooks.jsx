import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import sampleService from "./service";

const DEFAULT_PAGE_SIZE = 10;

export const useSampleDetail = ({ id }) =>
  useQuery({
    enabled: !!id,
    queryKey: ["sample", "detail", id],
    queryFn: async () => await sampleService.getById(id),
  });

export const useAllSamples = () =>
  useQuery({
    queryKey: ["sample", "list", "all"],
    queryFn: async () => {
      const { data } = await getSamples({ pageSize: -1, page: 1 });
      return data;
    },
  });

export const useSamplesPaginated = ({ page = 1, searchText }) => {
  const queryClient = useQueryClient();

  const queryInfo = useQuery({
    queryKey: ["sample", "list", { searchText, page }],
    queryFn: () =>
      getSamples({
        searchText,
        page,
      }),
    keepPreviousData: true,
  });

  useEffect(() => {
    if (!queryInfo.isPreviousData && queryInfo.data?.pageInfo.hasNext) {
      queryClient.prefetchQuery({
        queryKey: ["sample", "list", { searchText, page: page + 1 }],
        queryFn: () =>
          getSamples({
            searchText,
            page: page + 1,
          }),
        staleTime: Infinity,
      });
    }
  }, [queryInfo.data, queryInfo.isPreviousData, page, queryClient, searchText]);

  return queryInfo;
};

async function getSamples({ searchText, page, pageSize = DEFAULT_PAGE_SIZE }) {
  const query = {
    pageNumber: page,
    pageSize,
    searchText,
  };
  const res = await sampleService.getPagedList(query);

  return res;
}

export const useSampleUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (query) => {
      return sampleService.createOrUpdate(query);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sample"],
      });
    },
  });
};

export const useSampleDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (query) => {
      return sampleService.delete(query);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sample"],
      });
    },
  });
};
