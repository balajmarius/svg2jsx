import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import type { Variables } from "@/utils/types";

export const useApi = () => {
  const { data, isSuccess, isError, mutate, reset } = useMutation({
    mutationFn: (variables: Variables) => axios.post("/api", variables),
  });

  return {
    jsx: data?.data.jsx,
    isSuccess,
    isError,
    reset,
    mutate,
  };
};
