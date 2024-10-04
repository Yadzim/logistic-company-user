/** @format */

import { CLIENT_API } from "@/services";
import { QueryObserverOptions, useQuery } from "@tanstack/react-query";
import { IBaseOneData } from "./type";

type TypeGetAllData = {
  queryKey: Array<string | number | undefined | any>;
  url: string;
  params?: Record<string | number, any>;
  options?: QueryObserverOptions<any>;
};
const useGetOneData = <T = any>({
  queryKey,
  url,
  options,
  params,
}: TypeGetAllData & Omit<QueryObserverOptions, "queryKey, queryFn">) => {
  const response = useQuery<any>({
    queryKey: [...queryKey],
    queryFn: () => CLIENT_API.getOne({ url, params }),
    ...options,
  });

  return { ...response, ...(response.data as IBaseOneData) };
};

export default useGetOneData;
