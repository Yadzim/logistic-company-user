/** @format */
"use client";

import { CLIENT_API } from "@/services";
import { QueryObserverOptions, useQuery } from "@tanstack/react-query";
import { IBaseAllData } from "./type";

type TypeGetAllData = {
  queryKey: Array<string | number | undefined | any>;
  url: string;
  params?: Record<string | number, any>;
  options?: Omit<QueryObserverOptions<any>, "queryKey">;
};

const useGetAllData = ({ queryKey, url, params, options }: TypeGetAllData) => {
  const response = useQuery({
    queryKey: [...queryKey],
    queryFn: () => CLIENT_API.getAll({ url, params }),
    refetchOnWindowFocus: false,
    retry: 0,
    ...options,
  });

  return { ...response, ...(response.data as IBaseAllData) };
};

export default useGetAllData;
