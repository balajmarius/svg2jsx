import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import type { Variables } from "@/utils/types";

export const useApi = () => {
  const { data, isSuccess, isError, isPending, mutate, reset } = useMutation({
    mutationFn: (variables: Variables) => axios.post("/api", variables),
  });

  return {
    jsx: data?.data.jsx,
    isSuccess,
    isPending,
    isError,
    reset,
    mutate,
  } as const;
};
